import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FiredbService {

  constructor(private aFirestore:AngularFirestore) { }

  guardar(update: any){
    // const col = this.aFirestore.collection('usuarios');
    // const documento = this.aFirestore.doc('usuarios/'+this.aFirestore.createId());
    // documento.set({
    //   id:documento.ref.id,
    //   nombre: "Fernando",
    //   apellido: "fernandez",
    //   edad: 30,
    // });
  }

  traer(){
    const col = this.aFirestore.collection('usuarios');
    col.valueChanges().subscribe((next:any) => {
      console.log(next);
    })
  }

  traerPeliculas(){
    const col = this.aFirestore.collection('peliculas');
    col.valueChanges().subscribe((next:any) => {
      console.log(next);
      return next;
    })
  }

  updatePelicula(update: any){
    const documento = this.aFirestore.doc('peliculas/'+update.id);
    documento.update(update);
    //documento.update({})
  }

  delete(id:string){
    const documento  = this.aFirestore.doc('usuarios/'+id);
    documento.delete();
  }

  guardarActor(actor:any){
    const col = this.aFirestore.collection('actores');
    const documento = this.aFirestore.doc('actores/'+this.aFirestore.createId());
    documento.set({
      id:documento.ref.id,
      nombre: actor.nombre,
      apellido: actor.apellido,
      edad: actor.edad,
      nacionalidad: actor.nacionalidad,
    });
  }

}
