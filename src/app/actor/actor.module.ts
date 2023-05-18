import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorComponent } from './actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { TablaPeliculasActorComponent } from './tabla-peliculas-actor/tabla-peliculas-actor.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    ActorComponent,
    ActorPeliculaComponent,
    TablaPeliculasActorComponent,
    DetallePaisComponent,
    DetalleActorComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ]
})
export class ActorModule { }
