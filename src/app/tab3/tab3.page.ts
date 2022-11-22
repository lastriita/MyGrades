import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonSearchbar } from '@ionic/angular';
import { UniversidadesService } from './universidades.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll
  @ViewChild(IonSearchbar) searchbar: IonSearchbar;

  notas_corte: any=[]
  data: any=[]
  cont: number=0
  mode: string="uni"
  constructor(private http: HttpClient, private uniservice: UniversidadesService) {}

  textoBuscar='';

  ngOnInit() {
    this.http.get('../../assets/data/universidades.json').subscribe(resp=>{
      this.data=resp
      this.uniservice.setUnis(resp)
    })
    this.http.get('../../assets/data/notas_corte.json').subscribe(resp=>{
      this.notas_corte=resp
      this.uniservice.setNotasCorte(resp)
    })
  }

  ionViewWillEnter(){
    this.textoBuscar=""
    this.searchbar.value="";
  }

  buscar(event){
    this.textoBuscar=event.detail.value;
  }

  /*loadData(event) {
    this.cont+=1
    setTimeout(() => {
      console.log('Done');

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == this.notas_corte.length) {
        event.target.complete();
        event.target.disabled = true;
        this.infiniteScroll.disabled=true;
        return;
      }

      var masUsuarios=this.notas_corte.slice(this.cont*20,this.cont*20+19)
      this.data.push(...masUsuarios)
      event.target.complete();
    }, 500);
  }*/

  changeFormat(){
    if(this.mode=="uni"){
      return true
    }else{
      return false
    }
  }
}
