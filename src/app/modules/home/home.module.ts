import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BodyModule } from '../body/body.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    BodyModule,
    HttpClientModule
    
  ]
})
export class HomeModule { }
