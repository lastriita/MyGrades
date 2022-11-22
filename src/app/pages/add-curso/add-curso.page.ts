import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Router } from '@angular/router';
import { Etapa } from 'src/app/tab1/asignatura.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.page.html',
  styleUrls: ['./add-curso.page.scss'],
})
export class AddCursoPage implements OnInit {

  constructor(private asignaturas: AsignaturaService, private router: Router,
    private fromBuilder: FormBuilder) { }

  cursoForm= this.fromBuilder.group({
    name:[''],
    etapas: ['']
  })

  ngOnInit() {
  }

  submit(){
    this.asignaturas.setCursoActual(this.cursoForm.value.name)
    if(this.cursoForm.value.etapas==='Trim'){
      this.asignaturas.setEtapaActual('1º Trimestre')
      this.asignaturas.addCurso(this.cursoForm.value.name, this.trim)
    }else{
      this.asignaturas.setEtapaActual('1º Semestre')
      this.asignaturas.addCurso(this.cursoForm.value.name, this.sem) 
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
