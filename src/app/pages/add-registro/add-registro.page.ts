import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Router } from '@angular/router';
import { Etapa } from 'src/app/tab1/asignatura.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.page.html',
  styleUrls: ['./add-registro.page.scss'],
})
export class AddRegistroPage implements OnInit {

  constructor(private asignaturas: AsignaturaService, private router: Router,
    private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  add(name, tipo){
    this.asignaturas.setCursoActual(name)
    if(tipo==='Trim'){
      this.asignaturas.setEtapaActual('1º Trimestre')
      this.asignaturas.addCurso(name, this.trim)
    }else{
      this.asignaturas.setEtapaActual('1º Semestre')
      this.asignaturas.addCurso(name, this.sem)  
    }
    this.router.navigate(['/tabs/tab1'])
  }

  private sem: Etapa[]=[
    {
      name: '1º Semestre',
      asignaturas: []
    },
    {
      name: '2º Semestre',
      asignaturas: []
    }
  ]

  private trim: Etapa[]=[
    {
      name: '1º Trimestre',
      asignaturas: []
    },
    {
      name: '2º Trimestre',
      asignaturas: []
    },
    {
      name: '3º Trimestre',
      asignaturas: []
    }
  ]

}
