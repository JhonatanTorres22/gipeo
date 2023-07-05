import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MetaRoutingModule } from './meta-routing.module';
import { MetaPageComponent } from './pages/meta-page/meta-page.component';
import { FormsModule } from '@angular/forms';
//material
import {MatStepperModule} from '@angular/material/stepper';

import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxRerenderModule } from 'ngx-rerender';



@NgModule({
  declarations: [
    MetaPageComponent,
    
  ],
  imports: [

    CommonModule,
    MetaRoutingModule,
    MatStepperModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    /* Para renderizar componentes o métodos */
    NgxRerenderModule
    
  ]
})
export class MetaModule { }
