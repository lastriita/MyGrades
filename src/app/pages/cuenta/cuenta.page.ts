import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore, private authService: AuthService) {}

  data: any

  ngOnInit(){
    this.auth.onAuthStateChanged(user=>{
      if(user!=null){
        this.db.collection('DatosPersonales').doc(user.uid).get().subscribe(doc=>{
          this.data=doc.data();
        })
      }
    });
  }

  logout(){
    this.authService.logout()
  }

  delete(){
    
  }
}
