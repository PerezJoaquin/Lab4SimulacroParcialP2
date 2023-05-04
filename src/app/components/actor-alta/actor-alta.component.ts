import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FiredbService } from 'src/app/servicios/firedb.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
  
  actorNombre!:string;
  actorApellido!:string;
  actorPais!:string;
  actorEdad!:number;
  actorFoto!:string;

  paises:any;
  url = 'https://restcountries.com/v3.1/all';
  paisPasado:any;
    
  constructor(private http:HttpClient, private fbd:FiredbService){
    console.log(this.treaerPaises());
  }
  


  treaerPaises(){
    this.http.get(this.url).subscribe(data => {
      this.paises = data;
      console.log("bien", data);
    });
  }
  
  guardar(){
    console.log({nombre: this.actorNombre,
      apellido:this.actorApellido,
      nacionalidad: this.actorPais,
      edad:this.actorEdad});
    this.fbd.guardarActor({nombre: this.actorNombre,
                          apellido: this.actorApellido,
                          nacionalidad: this.actorPais,
                          edad: this.actorEdad});
    
  }

  pasarPais($event:any){
    this.paisPasado = $event;
    this.actorPais = this.paisPasado.name.common;
  }
  

}
