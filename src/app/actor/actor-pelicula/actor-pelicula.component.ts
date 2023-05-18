import { Component } from '@angular/core';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent {
  detalleMostrar:any;
  peliculaMostrar:any;
  paisMostrar:any;

  pasarDetalle(event:any){
    this.detalleMostrar = event;
  }

  pasarPais(event:any){
    this.paisMostrar = event;
  }

  pasarPelicula(event:any){
    this.peliculaMostrar = event;
  }
}
