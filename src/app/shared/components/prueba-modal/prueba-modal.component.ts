import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
import { DetalleAccionesService } from '../../services/detalle-acciones.service';
import { AccionesService } from '../../services/acciones.service';
import { DetalleAccionesModelI } from 'src/app/core/models/detalle-acciones.interface';
import { AccionesModelI } from 'src/app/core/models/acciones.interface';

@Component({
  selector: 'app-prueba-modal',
  templateUrl: './prueba-modal.component.html',
  styleUrls: ['./prueba-modal.component.scss']
})
export class PruebaModalComponent {

  constructor( private router: Router,private activatedRoute:ActivatedRoute, private detalleAccionesService:DetalleAccionesService, private accionesService:AccionesService ) {}

  accionesModel! :DetalleAccionesModelI[];
  datosAcciones! : AccionesModelI[]

 ngOnInit(): void {
  this.obtenerIndicadorAcciones();
 }

  obtenerIndicadorAcciones(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params ['id'];
        if(id){
          this.detalleAccionesService.getDetalleAcciones(id).subscribe(
            (data:any) =>{
              this.accionesModel = data.data;
              console.log(this.accionesModel); 
            }
          )
        }
      }
    )
  }
  
}
