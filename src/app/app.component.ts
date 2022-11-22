import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AsignaturaService } from './tab1/asignatura.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar2 } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private asignaturas: AsignaturaService,
    private auth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /*if(this.platform.is('android')) {
        StatusBar2.setStyle({
          style: StatusBarStyle.Light
        });
        StatusBar2.show()
        // Display content under transparent status bar (Android only)
        StatusBar2.setOverlaysWebView({
          overlay: true
        });
      }else{
        StatusBar2.setStyle({
          style: StatusBarStyle.Light
        });
        StatusBar2.setOverlaysWebView({
          overlay: true
        });
      }*/
      
      this.splashScreen.hide();
    });
    /*this.auth.onAuthStateChanged(user=>{
      if(user!=null){
        this.asignaturas.setID(user.uid);
        this.asignaturas.setDB(user.uid);
      }
    });*/

  }
}
