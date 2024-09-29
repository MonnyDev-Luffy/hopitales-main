import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {RouterService} from "../../servicios/router.service";

@Component({
  selector: 'app-registrar-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './registrar-pacientes.component.html',
  styleUrls: ['./registrar-pacientes.component.scss']
})
export class RegistrarPacientesComponent implements OnInit {

  constructor(
    private routerService: RouterService
  ) {
  }

  ngOnInit(): void {
  }

  irPacientes(){
    this.routerService.irPacientes();
  }

}
