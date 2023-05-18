import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent {
  @Input() paisDet!:any;
  pais={
    name:{
      common:"País"
    },
    flags:{
      png:"assets/defbadnera.png"
    }
  }
}
