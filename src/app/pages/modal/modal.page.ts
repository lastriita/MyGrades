import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() name: string;
  @Input() nota: number;

  constructor(private modalCtrl: ModalController, private fromBuilder: FormBuilder) { }

  ngOnInit() {
  }

  notaForm= this.fromBuilder.group({
    nota:['']
  })

  salirSinArgumentos(){
    this.modalCtrl.dismiss(null, 'cancel')
  }

  submit(){
    this.modalCtrl.dismiss(this.notaForm.value.nota, 'change')
  }

  vaciar(){
    this.modalCtrl.dismiss(null, 'change')
  }

}
