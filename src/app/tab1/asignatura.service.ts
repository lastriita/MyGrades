import { Injectable } from '@angular/core';
import { Curso, Etapa, Asignatura } from './asignatura.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService{

  //ca-app-pub-1260787779083197~7133666284

  private cursos: Curso[]=[]

  constructor(private db: AngularFirestore) { }

  private cursoActual=null;

  private etapaActual=null;

  data: any;

  id: string;

  private events: any[]=[]

  getDB(){
    return this.db.collection('usuarios').snapshotChanges()
  }

  setDB(value: string){
    this.id=value
    this.db.collection('usuarios').doc(value).valueChanges().subscribe(cur=>{
      this.data=cur
      this.cursos=this.data.cursos
      this.cursoActual=this.data.cursoActual
      this.etapaActual=this.data.etapaActual
    })
  }

  setID(value: string){
    this.id=value
  }

  getPromDB(value: string){
    this.id=value
    return this.db.collection('usuarios').doc(value).valueChanges()
  }

  resetService(){
    this.cursos=[]
    this.cursoActual=""
    this.etapaActual=""
    this.events=[]
    this.data=[]
  }

  setCursos(cursos: Curso[]){
    this.cursos=cursos
  }

  getCursoActual(){
    return this.cursoActual;
  }

  setCursoActual(cursoActual){
    this.cursoActual=cursoActual;
  }

  getEtapaActual(){
    return this.etapaActual;
  }

  setEtapaActual(etapaActual){
    this.etapaActual=etapaActual;
  }

  setEtapaActualNueva(){
    this.etapaActual=this.getCurso().etapas[0].name;
  }

  getCurso() {
    return {
      ...this.cursos.find(a => {
        return a.name===this.cursoActual
    })
  }}

  getCursos() {
    return this.cursos
  }

  getEtapa() {
    return {
      ...this.getCurso().etapas.find(a => {
        return a.name===this.etapaActual
    })
  }}

  getAsignaturas() {
    return this.getEtapa().asignaturas
  }

  getAsignatura(placeId: string) {
    return {
      ...this.getAsignaturas().find(a => {
        return a.id === placeId
      })
    }
  }

  addAsignatura(asignatura: Asignatura, etapa: string){
    var id
    this.cursos.forEach(a=>{
      if(a.name==asignatura.curso){
        this.cursoActual=a.name
        a.etapas.forEach(b=>{
          if(etapa=='anual'){
            if(b.asignaturas[b.asignaturas.length-1]!=undefined){
              if(id>Number(b.asignaturas[b.asignaturas.length-1].id)){
                asignatura.id=String(id)
              }else{
                id=Number(b.asignaturas[b.asignaturas.length-1].id)+1
                asignatura.id=String(id)
              }
            }else{
              asignatura.id='0'
            }
            b.asignaturas.push(asignatura);
            this.etapaActual=a.etapas[0].name
          }
          if(b.name==etapa){
            if(b.asignaturas[b.asignaturas.length-1]!=undefined){
              const id=Number(b.asignaturas[b.asignaturas.length-1].id)+1
              asignatura.id=String(id)
            }else{
              asignatura.id='0'
            }
            const asig=asignatura
            b.asignaturas.push(asig);
            this.etapaActual=b.name
          }
        })
      }
    })
    this.updateDB()
  }

  addCurso(name: string, etapa: Etapa[]){
    this.cursos.push({
      name,
      etapas: etapa
    });
    this.updateDB()
  }

  removeAsignatura(placeId: string) {
    this.cursos.forEach(a=>{
      if(a.name==this.cursoActual){
        a.etapas.forEach(b=>{
          if(b.name==this.etapaActual){
            b.asignaturas=this.getAsignaturas().filter(a => {
              return a.id !== placeId
            })
          }
        })
      }
    })
    this.updateDB()
  }

  getEventosAsignatura(placeId: string) {
    return this.events.filter(a => {
      return a.id === placeId && a.curso===this.cursoActual && a.etapa===this.etapaActual
    })
  }

  getEvents(){
    return this.events;
  }

  setEvents(events){
    this.events=events
  }

  addEvent(evento){
    this.events.push(evento)
    this.updateDB()
  }

  removeEvent(data_item){
    this.events = this.events.filter(item => item !== data_item);
    this.updateDB()
  }

  updateDB(){
    this.db.collection('usuarios').doc(this.id).set({
      cursoActual: this.cursoActual,
      etapaActual: this.etapaActual,
      cursos: this.cursos,
      events: this.events
    })
  }
}
