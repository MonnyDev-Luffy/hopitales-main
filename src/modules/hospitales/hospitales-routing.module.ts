import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hospitales',
    loadChildren: () => import('../../modules/hospitales/hospitales.module').then((hospitales) => hospitales.HospitalesModule)
  },
  { //  http://localhost:4200/hospitales/home
    path: 'home',
    loadComponent: () => import('../../modules/pages/home/home.component').then((home) => home.HomeComponent)
  },
  { //  http://localhost:4200/hospitales/citas
    path: 'citas',
    loadComponent: () => import('./citas/citas.component').then((citas) => citas.CitasComponent)
  },
  {
    path: 'busqueda-pacientes',
    loadComponent: () => import('./busqueda-pacientes/busqueda-pacientes.component').then((busquedaPacientes) => busquedaPacientes.BusquedaPacientesComponent)
  },
  {
    path: 'registrar-pacientes',
    loadComponent: () => import('./registrar-pacientes/registrar-pacientes.component').then((registrarPacientes) => registrarPacientes.RegistrarPacientesComponent)
  },
  {
    path: 'registrar-medicos',
    loadComponent: () => import('./registrar-medicos/registrar-medicos.component').then((registrarMedicos) => registrarMedicos.RegistrarMedicosComponent)
  },
  { //  http://localhost:4200/hospitales/pacientes
    path: 'pacientes',
    loadComponent: () => import('./pacientes/pacientes.component').then((pacientes) => pacientes.PacientesComponent)
  },
  { //  http://localhost:4200/hospitales/medicos
    path: 'medicos',
    loadComponent: () => import('./medicos/medicos.component').then((medicos) => medicos.MedicosComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
