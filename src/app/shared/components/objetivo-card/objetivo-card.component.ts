import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ObjetivoModelI } from 'src/app/core/models/objetivos.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { IndicadorModalComponent } from '../../components-modals/indicador-modal/indicador-modal.component';
import { ObjetivosService } from '../../services/objetivos.service';
import { ObjetivoPostI } from '../../../core/interfaces-crud/objetivo-post';

@Component({
  selector: 'app-objetivo-card',
  templateUrl: './objetivo-card.component.html',
  styleUrls: ['./objetivo-card.component.scss']
})
export class ObjetivoCardComponent implements OnInit {


  // activacion del boton
  selectedId: number | null = null;

  selectButton(id: number) {
    this.selectedId = id;
  }


 constructor(public dialog:MatDialog, private ObjetivoService:ObjetivosService){}

 @Input() dataObj: ObjetivoModelI[] = [
    { id:0, codigoInterno: '1', descripcion: 'default', indicador: 'default', lineaBase: 0, estado: true }
  ]
 
@Output() selectID: EventEmitter<number> = new EventEmitter<number>();
  
//envio de id a detalle objetivo
selectObjetivo(id:number):void{
    this.selectID.emit(id);
    console.log(id);
  
  }
 ngOnInit(): void {
  // console.log(this.dataObj)
  
 }

delete(id:number, usuarioModificacion:1)
{
  if(confirm("¿Seguro de desea elminar el Objetivo?"))
 this.ObjetivoService.deleteObjetivo(id,usuarioModificacion).subscribe(()=>console.log("datos eliminados correctamente"))
}





 openDialog() {
  this.dialog.open(IndicadorModalComponent);
}
}
