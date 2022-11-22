import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Asignatura } from 'src/app/tab1/asignatura.model';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-asig-detail',
  templateUrl: './asig-detail.page.html',
  styleUrls: ['./asig-detail.page.scss'],
})
export class AsigDetailPage implements OnInit {

  asignatura: Asignatura

  notaCompleta: boolean=false
  notaIncompleta: boolean=false
  eventos

  sliderConfig={
    spaceBetween:-40,
    centeredSlides:true,
    slidesPerView: 2.8,
    initialSlide: 1,
  }

  constructor(private activatedRoute:ActivatedRoute, private asignaturaService: AsignaturaService,
    private router: Router, private alert: AlertController, private modalCrtl: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const recipeId=param.get('dataId')
      this.asignatura=this.asignaturaService.getAsignatura(recipeId);
      this.eventos= this.asignaturaService.getEventosAsignatura(recipeId)
    })

    this.asignatura.ponderaciones.forEach(a=>{
      if(a.nota!=null){
        this.notaIncompleta=true
      }else{
        this.notaCompleta=true
      }
    })
  }

  checkDate(e){
    if(e.startTime instanceof Date==false){
      return false
    }else{
      return true
    }
  }

  async delete(){
    const alertElement= await this.alert.create({
      header: '¿Estás seguro de que quieres eliminar la asignatura?',
      message: 'Perderás los datos de la asignatura',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: ()=>{
            this.asignaturaService.removeAsignatura(this.asignatura.id)
            this.router.navigate(["/"])
          }
        }
      ]
    })
    await alertElement.present()
  }

  async abrirModal(ponderacion){
    this.activatedRoute.paramMap.subscribe(param =>{
      const recipeId=param.get('dataId')
      this.asignatura=this.asignaturaService.getAsignatura(recipeId);
    })

    const modal= await this.modalCrtl.create({
      component: ModalPage,
      componentProps:{
        name: ponderacion.name,
        nota: ponderacion.nota
      },
      cssClass:'my-modal-component-css',
      swipeToClose: true,
      presentingElement: await this.modalCrtl.getTop(),
      backdropDismiss:true
    });

    await modal.present()

    const {data: newNota, role}=await modal.onWillDismiss()
    if (role==="change"){
      const index= this.asignatura.ponderaciones.findIndex(p=>p.name=== ponderacion.name)
      this.asignatura.ponderaciones[index].nota=newNota
      this.asignaturaService.updateDB()

      this.notaIncompleta=false
      this.notaCompleta=false
      this.asignatura.ponderaciones.forEach(a=>{
        if(a.nota!=null){
          this.notaIncompleta=true
        }else{
          this.notaCompleta=true
        }
      })
    }
  }

  getNotaProvisional(){
    var pesoAcumulado=0;
    var notaAcumulada=0;
    this.asignatura.ponderaciones.forEach(a=>{
      if(a.nota!=null)
        pesoAcumulado=pesoAcumulado+a.peso
      notaAcumulada=notaAcumulada+a.nota*a.peso
    })
    var res=notaAcumulada/pesoAcumulado
    return res.toFixed(2)
  }

  getNotaMaxima(){
    var notaAcumulada=0;
    this.asignatura.ponderaciones.forEach(a=>{
      if(a.nota==null){
        notaAcumulada=notaAcumulada+10*a.peso
      }else{
        notaAcumulada=notaAcumulada+a.nota*a.peso
      }
    })
    var res=notaAcumulada/100
    return res.toFixed(2)
  }
  getNotaMinima(){
    var pesoAcumulado=0;
    var notaAcumulada=0;
    this.asignatura.ponderaciones.forEach(a=>{
      if(a.nota!=null)
        pesoAcumulado=pesoAcumulado+a.peso
      notaAcumulada=notaAcumulada+a.nota*a.peso
    })
    if((500-notaAcumulada)/(100-pesoAcumulado)>0){
      var res=(500-notaAcumulada)/(100-pesoAcumulado)
      return res.toFixed(2)
    }else{
      return 0
    }
  }

}
