import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorComponent } from './actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [{ path: '', component: ActorComponent },
                        {path:"actorPelicula", component:ActorPeliculaComponent}                        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [RouterModule]
})
export class ActorRoutingModule { 
}
