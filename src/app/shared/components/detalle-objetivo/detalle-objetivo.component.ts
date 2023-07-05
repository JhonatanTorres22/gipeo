import { Component, Input, OnInit } from '@angular/core';

import { ObjetivosService } from '../../services/objetivos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DaumDetalleObjetivo,MetaOe } from 'src/app/core/models/detalleObjetivo.interface';

import {FormGroup, FormControl} from '@angular/forms';

import { AccionesModelI } from 'src/app/core/models/acciones.interface';
import { ObjetivoModelI } from 'src/app/core/models/objetivos.interfaces';

@Component({
  selector: 'app-detalle-objetivo',
  templateUrl: './detalle-objetivo.component.html',
  styleUrls: ['./detalle-objetivo.component.scss']
})
export class DetalleObjetivoComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private objetivoService: ObjetivosService) { }
  
  @Input() dataObj: Array<ObjetivoModelI> = [{ id:0, codigoInterno: '', descripcion: '', indicador: '', lineaBase: 0, estado: true }]
  @Input() id_objetivo:number = 0;
  datosAcciones! : AccionesModelI;
  datosObjetivo: DaumDetalleObjetivo={id:0,codigoInterno:'',descripcion:'', indicador:'', lineaBase:0, metaOE:{anio:0, valor:0}};
  //metaObjetivo: MetaOe[] = [{anio:this.datosObjetivo.metaOE.anio,valor:this.datosObjetivo.metaOE.valor}];
  metaObjetivo!: MetaOe[];
  

  ngOnInit(): void {  

    this.obtenerObjetivo();
    // console.log(this.dataObj['1'].descripcion);
  }

  /* Renderizar nuevamente el método, para que se muestre los datos que provienen del API, para ello se debe instalar npm install --save ngx-rerender
  https://github.com/ngehlert/ngx-rerender
  https://developapa.com/angular-rerender/?fbclid=IwAR2davS-HZI6h3YW42VoZOUfqMBZqx6zmv2Y0u03V4hEWyfxGfG-OLmpKfQ  */
  public rerender(): void {
    this.obtenerObjetivo();
    //this.metaObjetivo = [{anio:this.datosObjetivo.metaOE.anio,valor:this.datosObjetivo.metaOE.valor}];
    
  }
  
  //Obtener todas los objetivos de la API mediante el servicio
  obtenerObjetivo():void {
    this.objetivoService.getObjetivo(this.id_objetivo).subscribe(
      (data:any) =>{
        this.datosObjetivo = data.data[0];
        this.metaObjetivo = data.data[0].metaOE;
        // console.log(this.datosObjetivo);

      }
    )
  }
  // obtenerObjetivo(): void {
  //   this.activatedRoute.params.subscribe(
  //     params => {
  //       let id = params['id'];
  //       if (id) {
  //         this.objetivoService.getObjetivo(id).subscribe(

  //           (data:any) => {
  //             this.datosObjetivo= data.data[0];
  //             console.log(this.datosObjetivo);
              
  //             this.editarObjetivo.patchValue({
  //               'codigoInterno':this.datosObjetivo.codigoInterno,
  //               'descripcion':this.datosObjetivo.descripcion,
  //               'indicador': this.datosObjetivo.indicador,
  //               'lineaBase':this.datosObjetivo.lineaBase,
  //               'id':id,
  //             })
  //             this.metaObjetivo = data.data[0].metaOE
  //             console.log(this.metaObjetivo);
  //           }  
  //         )   
  //       }
  //     }  
  //   )
  // }
}