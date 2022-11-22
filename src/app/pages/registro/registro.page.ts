import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Tab1Page } from 'src/app/tab1/tab1.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarioForm= this.formBuilder.group({
    correo: [''],
    password: [''],
    name:['']
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,
    private asignaturas: AsignaturaService, private tab1: Tab1Page) { }

  ngOnInit() {
  }

  submit(){
    this.authService.registro(this.usuarioForm.value.correo,this.usuarioForm.value.password,this.usuarioForm.value.name).then(res=>{
        this.asignaturas.resetService()
        this.tab1.ionViewWillEnter()
        this.router.navigate(['/'])
    }).catch(err=>console.log("Datos incorrectos"))
  }

}
