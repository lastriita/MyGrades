import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarioForm= this.formBuilder.group({
    correo: [''],
    password: ['']
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  submit(){
    this.authService.login(this.usuarioForm.value.correo,this.usuarioForm.value.password).then(res=>{
      this.router.navigate(['/'])
    }).catch(err=>alert("Datos incorrectos"))
  }

}
