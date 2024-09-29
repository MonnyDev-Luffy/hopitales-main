import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router
  ) {
  }

  ir(url: string) {
    return this.router.navigate([url]);
  }

  irHome(){
    return this.ir('/hospitales/home');
  }

  irCitasPacientes(){
    return this.ir('/hospitales/citas');
  }

  irBusquedaPacientes(){
    return this.ir('/hospitales/busqueda-pacientes');
  }

  irRegistrarPacientes(){
    return this.ir('/hospitales/registrar-pacientes');
  }

  irRegistrarMedicos(){
    return this.ir('/hospitales/registrar-medicos');
  }

  irPacientes(){
    return this.ir('/hospitales/pacientes');
  }

  irMedicos(){
    return this.ir('/hospitales/medicos');
  }
}
