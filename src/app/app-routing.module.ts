import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/page/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
    loadChildren: () => import(`./modules/auth/auth.module`).then(m =>m.AuthModule)
   },

  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m =>m.HomeModule)
    
   },
   {
    path: '**',
    redirectTo:  '/auth/login'
  
   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
