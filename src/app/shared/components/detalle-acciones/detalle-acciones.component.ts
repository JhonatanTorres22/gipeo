import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccionesModelI } from 'src/app/core/models/acciones.interface';
import { AccionesService } from '../../services/acciones.service';
import { ObjetivoModelI } from 'src/app/core/models/objetivos.interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detalle-acciones',
  templateUrl: './detalle-acciones.component.html',
  styleUrls: ['./detalle-acciones.component.scss']
})
export class DetalleAccionesComponent implements OnInit{


   // activacion del boton
   selectedId: number | null = null;

   selectButton(id: number) {
     this.selectedId = id;
   }
 

  constructor(private activatedRoute:ActivatedRoute, private accionesService:AccionesService){}

  
 @Input() id_objetivo:number =0;
 @Output() selectAccionID: EventEmitter<number> = new EventEmitter<number>();
  datosAcciones! : AccionesModelI[]
  
  selectAccionId(id: number){
    this.selectAccionID.emit(id);
    console.log(id);
  }
  /* Iniciar el método */
  ngOnInit() {
    this.obtenerAcciones();
  }

  /* Renderizar nuevamente el método, para que se muestre los datos que provienen del API, para ello se debe instalar npm install --save ngx-rerender
  https://github.com/ngehlert/ngx-rerender
  https://developapa.com/angular-rerender/?fbclid=IwAR2davS-HZI6h3YW42VoZOUfqMBZqx6zmv2Y0u03V4hEWyfxGfG-OLmpKfQ  */
  public rerender(): void {
    this.obtenerAcciones();
  }

  //Obtener todas las acciones de la API mediante el servicio
  obtenerAcciones(){
    this.accionesService.getAcciones(this.id_objetivo).subscribe(
      (data:any) => {
        this.datosAcciones = data.data;
        console.log(this.datosAcciones)
      }
    ) 
  }

}


