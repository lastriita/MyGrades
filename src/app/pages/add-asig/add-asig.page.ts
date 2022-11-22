import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturaService } from 'src/app/tab1/asignatura.service';
import { Curso, Asignatura } from 'src/app/tab1/asignatura.model';
import { FormBuilder, FormArray } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
//import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, Capacitor } from '@capacitor/core';
//const { Camera, Filesystem } = Plugins;
@Component({
  selector: 'app-add-asig',
  templateUrl: './add-asig.page.html',
  styleUrls: ['./add-asig.page.scss'],
})
export class AddAsigPage implements OnInit {

  data: Curso[]
  curso: Curso
  imagenURL: string
  imagenCamara: string

  items: number[]=[
    0
  ]

  constructor(private asignaturas: AsignaturaService, private router: Router,
    private fromBuilder: FormBuilder, private heplerService: HelperService) { }

  private asignatura: Asignatura

  asignaturaForm= this.fromBuilder.group({
    name:[''],
    curso:[''],
    etapa: [''],
    ponderaciones: this.fromBuilder.array([])
  })

  get ponderaciones(){
    return this.asignaturaForm.get('ponderaciones') as FormArray;
  }

  ionViewWillEnter(){
    this.imagenURL=this.heplerService.urlPhoto
  }

  ionViewWillLeave(){
    this.imagenURL=''
    this.heplerService.urlPhoto=''
  }

  agregarPonderacion(){
    const ponderacionesGroup= this.fromBuilder.group({
      name: '',
      peso: '',
      nota: null,
    })
    this.ponderaciones.push(ponderacionesGroup)
  }

  removePonderacion(indice: number){
    this.ponderaciones.removeAt(indice)
  }

  submit(){
    this.asignatura={
      id:'99',
      name:this.asignaturaForm.value.name,
      image: this.imagenURL,
      curso:this.asignaturaForm.value.curso,
      creditos: 6,
      ponderaciones: this.asignaturaForm.value.ponderaciones
    }
    this.asignaturas.addAsignatura(this.asignatura,this.asignaturaForm.value.etapa)
    this.router.navigate(['/'])
  }

  onChange(value){
    this.curso=this.data.find(a=>{
      return a.name===value
    })
  }

  ngOnInit() {
    this.data=this.asignaturas.getCursos()
    this.imagenURL=this.heplerService.urlPhoto
    const ponderacionesGroup= this.fromBuilder.group({
      name: '',
      peso: '',
      nota: null
    })
    this.ponderaciones.push(ponderacionesGroup)
    const ponderacionesGroup2= this.fromBuilder.group({
      name: '',
      peso: '',
      nota: null
    })
    this.ponderaciones.push(ponderacionesGroup2)
  }

  /*async getCamera() {
    

    //this.photo=this.sanitizer.bypassSecurityTrustUrl(image && (image.dataUrl))
    const options = {
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      height: 239,
      width: 577,
      preserveAspectRatio: true
    };

    const originalPhoto = await Camera.getPhoto(options);
    const photoInTempStorage = await Filesystem.readFile({ path: originalPhoto.path })

    let date = new Date(),
      time = date.getTime(),
      fileName = time + ".jpeg";

    await Filesystem.writeFile({
      data: photoInTempStorage.data,
      path: fileName,
      directory: FilesystemDirectory.Data
    });

    const finalPhotoUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName
    });

    let photoPath = Capacitor.convertFileSrc(finalPhotoUri.uri);
    this.imagenCamara=photoPath

  }*/
}
