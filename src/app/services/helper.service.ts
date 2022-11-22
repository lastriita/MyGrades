import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  urlPhoto: string='';

  setUrl(text){
    this.urlPhoto=text;
  }
}
