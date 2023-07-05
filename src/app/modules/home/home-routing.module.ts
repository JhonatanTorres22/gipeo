import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [

  {
    path: 'objetivo/detalle/:id',
    loadChildren:() => import('../meta/meta.module').then(m => m.MetaModule),
   },
   {
    path: 'objetivo',
    loadChildren:() => import('../meta/meta.module').then(m => m.MetaModule),
    // component: HomePageComponent
   },
  {
    path: 'dashboard',
    loadChildren:() => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  
   },
   {
    path: 'datos',
    loadChildren:() => import('../datos/datos.module').then(m => m.DatosModule),
  
   },
   {
    path: '**',
    redirectTo:  '/auth/login'
  
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
