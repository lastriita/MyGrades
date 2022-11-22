import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Curso } from '../tab1/asignatura.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  cursoActual: string

  data: Curso[]
  curso: Curso
  expand: boolean[]

  indices: any[]=[];

  sliderConfig={
    spaceBetween:-30,
    centeredSlides:true,
    slidesPerView: 2.8,
    initialSlide: 1,
  }

  constructor(private asignaturas: AsignaturaService, private auth: AngularFireAuth,
    private db: AngularFirestore) {}

  ngOnInit() {
    this.auth.onAuthStateChanged(user=>{
      this.asignaturas.getPromDB(user.uid).subscribe(cur=>{
        let ayuda:any
        ayuda=cur
        this.asignaturas.setCursos(ayuda.cursos)
        this.asignaturas.setCursoActual(ayuda.cursoActual)
        this.asignaturas.setEtapaActual(ayuda.etapaActual)
        
          this.data=this.asignaturas.getCursos()
          this.curso=this.asignaturas.getCurso()
          this.cursoActual=this.asignaturas.getCursoActual()
          this.indices=[]
          this.curso.etapas.forEach(e=>{           
            let arr2: boolean[]=[]
            e.asignaturas.forEach(a=>arr2.push(false))
            var value={
              indices: arr2
            }
            this.indices.push(value)
          })
        })
      });
  }

  expandir(i, j){
    if(!this.indices[i].indices[j]){
      this.indices=[]
      this.curso.etapas.forEach(e=>{
        let arr2: boolean[]=[]
        e.asignaturas.forEach(a=>arr2.push(false))
        var value={
          indices: arr2
        }
        this.indices.push(value)
      })
    }
    
    this.indices[i].indices[j]=!this.indices[i].indices[j]
  }

  onChange(value){
    this.indices=[]
    this.asignaturas.setCursoActual(value)
    this.curso=this.asignaturas.getCurso()
    this.curso.etapas.forEach(e=>{
      let arr2: boolean[]=[]
      e.asignaturas.forEach(a=>arr2.push(false))
      var value={
        indices: arr2
      }
      this.indices.push(value)
    })
  }

  ionViewWillEnter(){
    if(this.asignaturas.getCursos()!=null){
      this.data=this.asignaturas.getCursos()
      this.curso=this.asignaturas.getCurso()
      this.cursoActual=this.asignaturas.getCursoActual()
      this.indices=[]
      this.curso.etapas.forEach(e=>{
        let arr2: boolean[]=[]
        e.asignaturas.forEach(a=>arr2.push(false))
        var value={
          indices: arr2
        }
        this.indices.push(value)
      })
    }
  }

  getNotaProvisional(asignatura){
    var pesoAcumulado=0;
    var notaAcumulada=0;
    asignatura.ponderaciones.forEach(a=>{
      if(a.nota!=null)
        pesoAcumulado=pesoAcumulado+a.peso
      notaAcumulada=notaAcumulada+a.nota*a.peso
    })
    if(pesoAcumulado!=0){
      var res=notaAcumulada/pesoAcumulado
      return res.toFixed(2)
    }else
      return null
  }

  getNotaMaxima(asignatura){
    var notaAcumulada=0;
    asignatura.ponderaciones.forEach(a=>{
      if(a.nota==null){
        notaAcumulada=notaAcumulada+10*a.peso
      }else{
        notaAcumulada=notaAcumulada+a.nota*a.peso
      }
    })
    var res=notaAcumulada/100
    return res.toFixed(2)
  }
  getNotaMinima(asignatura){
    var pesoAcumulado=0;
    var notaAcumulada=0;
    var notasCompletas=true;
    asignatura.ponderaciones.forEach(a=>{
      if(a.nota!=null)
        pesoAcumulado=pesoAcumulado+a.peso
      else
        notasCompletas=false
      notaAcumulada=notaAcumulada+a.nota*a.peso
    })
    if(notasCompletas){
      return null;
    }else{
      if((500-notaAcumulada)/(100-pesoAcumulado)>0){
        var res=(500-notaAcumulada)/(100-pesoAcumulado)
        return res.toFixed(2)
      }else{
        return 0
      }
    }
  }

}
