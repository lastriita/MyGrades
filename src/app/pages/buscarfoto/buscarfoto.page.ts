import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-buscarfoto',
  templateUrl: './buscarfoto.page.html',
  styleUrls: ['./buscarfoto.page.scss'],
})
export class BuscarfotoPage implements OnInit {

  constructor(private nav: NavController, private helperService: HelperService) { }

  textoBuscar='';

  url='';

  data=[
    {
      url:'./assets/SSDD.png',
      name:'Sistemas digitales'
    },
    {
      url:'./assets/progra.jpg',
      name:'Programación'
    },
    {
      url:'./assets/calculomatematicas.jpg',
      name:'Matematicas Calculo'
    },
  ]

  ngOnInit() {
  }

  buscar(event){
    this.textoBuscar=event.detail.value;
  }

  select(url: String){
    this.nav.back();
    this.helperService.setUrl(url);
  }

}
