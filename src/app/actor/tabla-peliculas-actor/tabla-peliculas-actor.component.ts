import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tabla-peliculas-actor',
  templateUrl: './tabla-peliculas-actor.component.html',
  styleUrls: ['./tabla-peliculas-actor.component.css']
})
export class TablaPeliculasActorComponent {
  @Input() peliculaDet!:any;
  peliculas:any;
  actor={
    nombre:"Christopher Michael"
  };

  constructor(private fdbd:AngularFirestore){
    const col = this.fdbd.collection('peliculas');
    col.valueChanges().subscribe((next:any) => {
      this.peliculas = next;
      
      console.log(next);
    })
  }
}
