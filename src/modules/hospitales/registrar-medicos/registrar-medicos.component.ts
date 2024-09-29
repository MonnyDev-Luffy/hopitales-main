import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterService} from "../../servicios/router.service";

@Component({
  selector: 'app-registrar-medicos',
  standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './registrar-medicos.component.html',
  styleUrls: ['./registrar-medicos.component.scss']
})
export class RegistrarMedicosComponent implements OnInit {

  constructor(
    private routerService: RouterService
  ) {
  }

  ngOnInit(): void {
  }

  irMedicos(){
    this.routerService.irMedicos();
  }

}
