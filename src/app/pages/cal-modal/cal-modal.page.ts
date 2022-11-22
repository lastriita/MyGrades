import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Curso, Asignatura } from 'src/app/tab1/asignatura.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
 
  modalReady = false;
  data: Curso[]
  curso: Curso
  etapa: any
  asignatura: any
 
  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder,
    private asignaturas: AsignaturaService) { }

  event= this.formBuilder.group({
    title:[''],
    desc:[''],
    startTime: [null],
    endTime: [''],
    allDay: [false],
    curso:[''],
    etapa: [''],
    id: ['']
  })

  ngOnInit(){
    this.data=this.asignaturas.getCursos()
  }

  onChange(value){
    this.curso=this.data.find(a=>{
      return a.name===value
    })
    this.event.value.etapa=''
    this.etapa=null
  }

  onChangeE(value){
    this.etapa=this.curso.etapas.find(a=>{
      return a.name===value
    })
    this.asignatura=null
  }
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;      
    }, 0);
  }
 
  save() {  
    let eventCopy = {
      title: this.event.value.title,
      startTime:  new Date(this.event.value.startTime),
      endTime: new Date(this.event.value.endTime),
      allDay: this.event.value.allDay,
      desc: this.event.value.desc,
      curso: this.event.value.curso,
      etapa: this.event.value.etapa,
      id: this.event.value.id,
    }

    this.modalCtrl.dismiss({event: eventCopy})
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
