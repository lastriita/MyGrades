import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversidadesService } from 'src/app/tab3/universidades.service';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {
  
  universidad: any
  carreras=[]
  textoBuscar=''

  constructor(private activatedRoute:ActivatedRoute, private uniservice: UniversidadesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const recipeId=param.get('dataId')
      this.universidad=this.uniservice.getUni(recipeId)
      this.carreras=this.uniservice.getCarrerasUni(this.universidad.name)
    })
  }

  buscar(event){
    this.textoBuscar=event.detail.value;
  }

}
