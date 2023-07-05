import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DetalleAccionesService } from '../../services/detalle-acciones.service';
import { DetalleAccionesModelI } from 'src/app/core/models/detalle-acciones.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { AccionesModelI } from 'src/app/core/models/acciones.interface';
import { MatDialog } from '@angular/material/dialog';
import { IndicadorModalComponent } from '../../components-modals/indicador-modal/indicador-modal.component';
import { AccionesService } from '../../services/acciones.service';



@Component({
  selector: 'app-indicador-acciones',
  templateUrl: './indicador-acciones.component.html',
  styleUrls: ['./indicador-acciones.component.scss'],

})
export class IndicadorAccionesComponent implements OnInit{

  constructor(
    private dialog:MatDialog, 
    private router: Router,
    private activatedRoute:ActivatedRoute, 
    private detalleAccionesService:DetalleAccionesService,
    private acciones:AccionesService
     ) {}
     
 @Input() id_accion:number = 0;
 @Input() id_objetivo:number =1;

 

  accionesModel! :DetalleAccionesModelI[];
  datosAcciones! : AccionesModelI[]

 ngOnInit(): void {
  this.obtenerIndicadorAcciones();
  this.obtenerAcciones();
 }

 /* Renderizar nuevamente el método, para que se muestre los datos que provienen del API, para ello se debe instalar npm install --save ngx-rerender
  https://github.com/ngehlert/ngx-rerender
  https://developapa.com/angular-rerender/?fbclid=IwAR2davS-HZI6h3YW42VoZOUfqMBZqx6zmv2Y0u03V4hEWyfxGfG-OLmpKfQ  */
  public rerender(): void {
    this.obtenerIndicadorAcciones();
    this.obtenerAcciones();
  }

 //Obtener todas las acciones de la API mediante el servicio
 obtenerIndicadorAcciones(){
   
         this.detalleAccionesService.getDetalleAcciones(this.id_accion).subscribe(
           (data:any) =>{
             this.accionesModel = data.data;
             console.log(this.accionesModel); 
          }
      )
  }


  obtenerAcciones(){
    this.acciones.getAcciones(this.id_objetivo).subscribe(
      (data:any) => {
        this.datosAcciones= data.data;
        console.log((this.datosAcciones));
        
      }
    )
  }
  openDialog() {
   this.dialog.open(IndicadorAccionesComponent);
 }
}
