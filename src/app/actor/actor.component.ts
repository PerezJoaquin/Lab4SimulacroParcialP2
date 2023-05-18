import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  constructor(private _rou:Router){
    this._rou.navigateByUrl("actor/actorPelcula")
  }
}
