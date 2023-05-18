import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent {
  @Output() EviarADetalle : EventEmitter<any> = new EventEmitter<any>();
  @Output() EviarAPelicula : EventEmitter<any> = new EventEmitter<any>();
  @Output() EviarAPais : EventEmitter<any> = new EventEmitter<any>();
  actores:any;

  constructor(private fdbd:AngularFirestore){
    const col = this.fdbd.collection('actores');
    col.valueChanges().subscribe((next:any) => {
      this.actores = next;
      console.log(next);
    })
  }

  peliculas(pel:any){
    this.EviarAPelicula.emit(pel);
  }

  detalles(det:any){
    this.EviarADetalle.emit(det);
  }

  pais(pai:any){
    this.EviarAPais.emit(pai);
  }
}
