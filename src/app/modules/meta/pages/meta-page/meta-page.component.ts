import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { ObjetivoModelI } from 'src/app/core/models/objetivos.interfaces';
import { IndicadorModalComponent } from 'src/app/shared/components-modals/indicador-modal/indicador-modal.component';

import { AccionesService } from 'src/app/shared/services/acciones.service';
import { DetalleAccionesService } from 'src/app/shared/services/detalle-acciones.service';
import { ObjetivosService } from 'src/app/shared/services/objetivos.service';


@Component({
  selector: 'app-meta-page',
  templateUrl: './meta-page.component.html',
  styleUrls: ['./meta-page.component.scss']
})
export class MetaPageComponent implements OnInit {

  selectedStepIndex = 0;

  
  objetivos:Array<ObjetivoModelI> = []

  @Input() selectObjetivoId:number = 1;
  @Input() selectAccionId: number = 1;
  
  selectObjetivoDetId:number = this.selectObjetivoId;
  

  constructor( private dialog:MatDialog ,private activatedRoute:ActivatedRoute,private accionesService:AccionesService,private detalleAccionesService:DetalleAccionesService, private objetivoService:ObjetivosService){}
  
  
  ngOnInit(): void {
    this.objetivoService.getAllObjetivo().subscribe(
      e=>this.objetivos =e
      )
      // console.log(this.id_objetivo_1)
    }
    
    onStepSelectionChange(event: any) {
      // Evita que se cambie de paso cuando se hace clic en los números del stepper
      if (event.selectedIndex !== this.selectedStepIndex) {
        event.preventDefault();
      }
    }

}
