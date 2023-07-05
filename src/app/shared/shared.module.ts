import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalleObjetivoComponent } from './components/detalle-objetivo/detalle-objetivo.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetalleAccionesComponent } from './components/detalle-acciones/detalle-acciones.component';

//material
import {MatStepperModule} from '@angular/material/stepper';
import { IndicadorAccionesComponent } from './components/indicador-acciones/indicador-acciones.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { ObjetivoCardComponent } from './components/objetivo-card/objetivo-card.component';
import { PruebasComponent } from './components/graficos/pruebas/pruebas.component';
import { IndicadorModalComponent } from './components-modals/indicador-modal/indicador-modal.component';
import { PruebaModalComponent } from './components/prueba-modal/prueba-modal.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ProyectoPoaComponent } from './components/proyecto-poa/proyecto-poa.component';
import { IndicadorPoaComponent } from './components/indicador-poa/indicador-poa.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DetalleObjetivoComponent,
    DetalleAccionesComponent,
    IndicadorAccionesComponent,
    GraficosComponent,
    ObjetivoCardComponent,
    PruebasComponent,
    IndicadorModalComponent,
    PruebaModalComponent,
    ActividadComponent,

    ProyectoPoaComponent,
      IndicadorPoaComponent,

  


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule



  ],

  exports: [
    SidebarComponent,
    NavbarComponent,
    DetalleObjetivoComponent,
    DetalleAccionesComponent,
    GraficosComponent,
    MatStepperModule,
    ObjetivoCardComponent,
    IndicadorAccionesComponent,
    ReactiveFormsModule,
    PruebaModalComponent,
    ActividadComponent,
    IndicadorPoaComponent,
  IndicadorModalComponent,
  IndicadorPoaComponent,
  ProyectoPoaComponent

  ]
})
export class SharedModule { }
