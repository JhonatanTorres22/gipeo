import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosPageComponent } from './page/datos-page/datos-page.component';

const routes: Routes = [
  {
    path: '',
    component: DatosPageComponent,
    outlet:'child',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosRoutingModule { }
