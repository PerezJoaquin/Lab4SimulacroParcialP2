import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FiredbService } from 'src/app/servicios/firedb.service';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {

  public forma!: FormGroup;
  
  actorNombre!:string;
  actorApellido!:string;
  actorPais!:string;
  actorEdad!:number;
  actorFoto='';
  newimage='';


  paises:any;
  url = 'https://restcountries.com/v3.1/all';
  paisPasado:any;

  showbar=false;
    
  constructor(private http:HttpClient, private fbd:FiredbService, private fb: FormBuilder){
    console.log(this.treaerPaises());
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.max(99)]],
      'pais': new FormControl({value:'', disabled: true}, [Validators.required]),
    });
    console.log(this.forma);

  }
  


  treaerPaises(){
    this.http.get(this.url).subscribe(data => {
      this.paises = data;
      console.log("bien", data);
    });
  }
  
  async guardar(){
    this.showbar=true;
    console.log({nombre: this.actorNombre,
      apellido:this.actorApellido,
      nacionalidad: this.actorPais,
      edad:this.actorEdad});
    if(await this.fbd.guardarActor({nombre: this.actorNombre,
                          apellido: this.actorApellido,
                          nacionalidad: this.paisPasado,
                          edad: this.actorEdad,
                          foto:this.actorFoto})){
      this.showbar=false;
      this.resetCampos();
      Swal.fire({
        title: 'Éxito!',
        text: 'El actor ha sido guardado con éxito',
        icon: 'success',
        confirmButtonText: 'OK!'
      })
    }else{
      this.showbar=false;
      Swal.fire({
        title: 'Error!',
        text: 'Ocurrió un erro guardando el actor',
        icon: 'error',
        confirmButtonText: 'OK!'
      })
    }
    
  }

  pasarPais($event:any){
    this.paisPasado = $event;
    this.actorPais = this.paisPasado.name.common;
  }

  onFileSelected(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=( (image)=>{
     
          this.newimage = image.target!.result as string;

      })
      reader.readAsDataURL(event.target.files[0])
    }
    const file = event.target.files[0];
    this.actorFoto = file;
    console.log("block", this.forma.invalid)
  }
  
  resetCampos(){
    this.actorNombre='';
    this.actorApellido='';
    this.actorPais='';
    this.actorEdad=0;
    this.actorFoto='';
    this.newimage='';

  }
}
