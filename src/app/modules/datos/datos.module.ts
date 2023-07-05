import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosRoutingModule } from './datos-routing.module';
import { DatosPageComponent } from './page/datos-page/datos-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DatosPageComponent
  ],
  imports: [
    CommonModule,
    DatosRoutingModule,
    SharedModule
  ]
})
export class DatosModule { }
