import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaPageComponent } from './pages/meta-page/meta-page.component';




const routes: Routes = [
  {
    path: '',
    component: MetaPageComponent,
    outlet:'child',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaRoutingModule { }
