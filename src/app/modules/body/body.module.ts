import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyPageComponent } from './pages/body-page/body-page.component';


@NgModule({
  declarations: [
    BodyPageComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ],
  exports:[
    BodyPageComponent
  ],

})
export class BodyModule { }
