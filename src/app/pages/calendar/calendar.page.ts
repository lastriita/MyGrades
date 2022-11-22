import { Component, OnInit, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalModalPage } from '../cal-modal/cal-modal.page';
import { formatDate } from '@angular/common';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  eventSource = [];
  viewTitle: string;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  selectedDate: Date;
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string, private asignaturas: AsignaturaService,
    private auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.onAuthStateChanged(user=>{
      this.asignaturas.getPromDB(user.uid).subscribe(cur=>{
        let ayuda:any
        ayuda=cur
        this.asignaturas.setCursos(ayuda.cursos)
        this.asignaturas.setCursoActual(ayuda.cursoActual)
        this.asignaturas.setEtapaActual(ayuda.etapaActual)
        this.asignaturas.setEvents(ayuda.events)
        var eventsFromStorage = this.asignaturas.getEvents()
        var countData = eventsFromStorage.length;
        for (let i = 0; i < countData; i++) {
          if(eventsFromStorage[i].startTime instanceof Date==false){
            eventsFromStorage[i].startTime = eventsFromStorage[i].startTime.toDate();
            eventsFromStorage[i].endTime = eventsFromStorage[i].endTime.toDate();
          }
        }
        this.eventSource=eventsFromStorage
        this.myCal.loadEvents();
        this.myCal.update();
        })
      });
    
  }

  ionViewWillEnter(){
    
  }

  next() {
    this.myCal.slideNext();
  }
 
  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  changeFormat(){
    if(this.calendar.mode!="month"){
      return true
    }else{
      return false
    }
  }

  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
   
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK',
      {
        text: 'Delete',
        handler: ()=>{
          this.asignaturas.removeEvent(event)
        }
      }]
    });
    alert.present();
  }

  removeEvent(data_item){
    this.eventSource = this.eventSource.filter(item => item !== data_item);
    this.myCal.loadEvents();
        this.myCal.update();
  }


  createEvent(){}
  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      swipeToClose: true,
      backdropDismiss: true
    });
   
    await modal.present();
   
    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.asignaturas.addEvent(result.data.event)
      }
    });
  }
}
