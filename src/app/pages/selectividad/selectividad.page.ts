import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-selectividad',
  templateUrl: './selectividad.page.html',
  styleUrls: ['./selectividad.page.scss'],
})
export class SelectividadPage implements OnInit {

  data: ChartDataSets[]=[{data:[0,0,10]}]
  chartLabels: Label[]= [
    'Bach',
    'Fase Obligatoria',
    'Nota restante'
  ]

  chartOptions: ChartOptions={
    cutoutPercentage: 60,
    rotation: 1*Math.PI,
    circumference: Math.PI
  }
  
  notaBach: number
  notaMate: number
  notaLengua: number
  notaIngles: number
  notaHistoria: number
  notaDefinitiva: String="0"
  notaEspe1: number
  notaEspe2: number
  espeToggle: boolean
  constructor() { }

  ngOnInit() {
  }

  cambio(){
    var notaBach=0
    var notaObligatoria=0
    var notaEspe=0
    var notaRestante=0
    if(this.espeToggle){
      if(this.notaBach!=undefined)
        notaBach= this.notaBach*0.6

      if(this.notaMate!=undefined)
        notaObligatoria= this.notaMate*0.1
      if(this.notaLengua!=undefined)
        notaObligatoria=notaObligatoria+this.notaLengua*0.1
      if(this.notaIngles!=undefined)
        notaObligatoria=notaObligatoria+this.notaIngles*0.1
      if(this.notaHistoria!=undefined)
        notaObligatoria=notaObligatoria+this.notaHistoria*0.1

      if(this.notaEspe1!=undefined)
        notaEspe= this.notaEspe1*0.2
      if(this.notaEspe2!=undefined)
        notaEspe= notaEspe + this.notaEspe2*0.2

      notaRestante= 14-notaBach-notaObligatoria-notaEspe
      var nota1: number =+notaBach.toFixed(3)
      var nota2: number =+notaObligatoria.toFixed(3)
      var nota3: number =+notaEspe.toFixed(3)
      var nota4: number =+notaRestante.toFixed(3)
      this.data=[{
        data:[
          nota1,
          nota2,
          nota3,
          nota4
        ]
      }]
      this.chartLabels=[
        'Bach',
        'Fase Obligatoria',
        'Especificas',
        'Nota restante'
      ]
      var number: number=notaBach+notaObligatoria+notaEspe
      this.notaDefinitiva=(number.toFixed(3))
    }else{
      if(this.notaBach!=undefined)
        notaBach= this.notaBach*0.6

      if(this.notaMate!=undefined)
        notaObligatoria= this.notaMate*0.1
      if(this.notaLengua!=undefined)
        notaObligatoria=notaObligatoria+this.notaLengua*0.1
      if(this.notaIngles!=undefined)
        notaObligatoria=notaObligatoria+this.notaIngles*0.1
      if(this.notaHistoria!=undefined)
        notaObligatoria=notaObligatoria+this.notaHistoria*0.1
      
      notaRestante= 10-notaBach-notaObligatoria
      var nota1: number =+notaBach.toFixed(3)
      var nota2: number =+notaObligatoria.toFixed(3)
      var nota3: number =+notaRestante.toFixed(3)
      this.data=[{
        data:[
          nota1,
          nota2,
          nota3
        ]
      }]
      this.chartLabels=[
        'Bach',
        'Fase Obligatoria',
        'Nota restante'
      ]
      var number: number=(notaBach+notaObligatoria)
      this.notaDefinitiva=(number.toFixed(3))
    }
  }

}
