import { Component, OnInit } from '@angular/core';
import {AsignaturaService} from './asignatura.service';
import { Curso } from './asignatura.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  cursoActual: string

  cursoActualProvisional: string

  etapaActual: string=null

  data: any=[];

  ifo: any;

  curso: Curso;

  cursos: Curso[];

  constructor(private asignaturas: AsignaturaService, private auth: AngularFireAuth) {
    }

  ngOnInit(){
    this.auth.onAuthStateChanged(user=>{
      this.asignaturas.getPromDB(user.uid).subscribe(cur=>{
        let ayuda:any
        ayuda=cur
        this.asignaturas.setCursos(ayuda.cursos)
        this.asignaturas.setCursoActual(ayuda.cursoActual)
        this.asignaturas.setEtapaActual(ayuda.etapaActual)
        this.asignaturas.setEvents(ayuda.events)
        if(ayuda.cursos.length!=0){
          this.cursos=this.asignaturas.getCursos()
          this.data=this.asignaturas.getAsignaturas()
          this.cursoActual=this.asignaturas.getCursoActual()
          this.cursoActualProvisional=this.asignaturas.getCursoActual()
          this.curso=this.asignaturas.getCurso()
          this.etapaActual=this.asignaturas.getEtapaActual()
        }else{
          this.cursos=[]
          this.data=[]
          this.cursoActual=null
          this.etapaActual=null
        }
        })
      });
  }

  ionViewWillEnter(){

  }

  onChange(value){
    if(this.cursoActualProvisional!=value){
      this.asignaturas.setCursoActual(value)
      this.asignaturas.setEtapaActualNueva()
      this.etapaActual=this.asignaturas.getEtapaActual()
      this.data=this.asignaturas.getAsignaturas()
      this.curso=this.asignaturas.getCurso()
      this.cursoActualProvisional=null
    }
  }

  onChangeE(value){
    this.asignaturas.setEtapaActual(value)
    this.etapaActual=this.asignaturas.getEtapaActual()
    this.data=this.asignaturas.getAsignaturas()
  }

}
