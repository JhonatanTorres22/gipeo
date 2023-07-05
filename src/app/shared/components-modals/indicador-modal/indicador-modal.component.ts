import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleAccionesService } from '../../services/detalle-acciones.service';
import { AccionesService } from '../../services/acciones.service';
import { DetalleAccionesModelI } from 'src/app/core/models/detalle-acciones.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { IndicadorAccionesComponent } from '../../components/indicador-acciones/indicador-acciones.component';
import { ObjetivosService } from 'src/app/shared/services/objetivos.service';
import { ObjetivoModelI } from '../../../core/models/objetivos.interfaces';
import { ObjetivoPostI } from 'src/app/core/interfaces-crud/objetivo-post';

@Component({
  selector: 'app-indicador-modal',
  templateUrl: './indicador-modal.component.html',
  styleUrls: ['./indicador-modal.component.scss']
})
export class IndicadorModalComponent implements  OnInit {


  objetivo:ObjetivoPostI = new ObjetivoPostI()
  constructor(private dialogRef: MatDialogRef<IndicadorAccionesComponent>,
    
    private http:ObjetivosService ) {}

  accionesModel! :DetalleAccionesModelI[];
  // datosAcciones! : AccionesModelI[]

 ngOnInit(): void {
 
 }


 create():void{
  this.http.postObjetivo(this.objetivo).subscribe(
    res=>this.objetivo
  )  
}

  cerrarModal():void {
    this.dialogRef.close();
  }
}
