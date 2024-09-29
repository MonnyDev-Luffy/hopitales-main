import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'',
  loadComponent: () => import('../modules/pages/home/home.component')
  .then(m => m.HomeComponent)
  },
  {
    path: 'hospitales',
    loadChildren: () => import('../modules/hospitales/hospitales.module').then((hospitales) => hospitales.HospitalesModule)
  },
  { //  http://localhost:4200/hospitales/home
    path: 'home',
    loadComponent: () => import('../modules/pages/home/home.component').then((home) => home.HomeComponent)
  },
  { //  http://localhost:4200/hospitales/citas
    path: 'citas',
    loadComponent: () => import('../modules/hospitales/citas/citas.component').then((citas) => citas.CitasComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
