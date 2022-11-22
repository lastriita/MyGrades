import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  universidades=[]
  notas_corte=[]

  constructor() { }

  setNotasCorte(notasC){
    this.notas_corte=notasC
  }

  setUnis(unis: any){
    this.universidades=unis
  }

  getUni(placeId: string) {
    return {
      ...this.universidades.find(a => {
        return a.name === placeId
      })
    }
  }

  getCarrerasUni(uni) {
      return this.notas_corte.filter(n=>{
        return n.Universidad===uni
      })
  }
}
