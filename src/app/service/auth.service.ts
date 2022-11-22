import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Auth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string){
    return new Promise((resolve, rejected)=>{
      this.Auth.signInWithEmailAndPassword(email, password).then(user=> {
        resolve(user);
      }).catch(err=> rejected(err))
    });
  }

  logout(){
    this.Auth.signOut().then(user=>{
      this.router.navigate(['/login'])
    })
  }

  delete(){
    
  }

  registro(email: string, password: string, name: string){
    return new Promise((resolve,rejected)=>{
      this.Auth.createUserWithEmailAndPassword(email, password).then(res=>{
        this.db.collection('DatosPersonales').doc(res.user.uid).set({
          name: name,
          uid: res.user.uid
        })
        this.db.collection('usuarios').doc(res.user.uid).set({
          cursoActual: '',
          etapaActual: '',
          cursos: [],
          events: []
        })
        resolve(res)
      }).catch(err=> rejected(err))
    })
  }

}
