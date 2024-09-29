import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalTableComponent} from "../../../shared/components/global-table/global-table.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {RouterService} from "../../servicios/router.service";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {AgendarCitasComponent} from "../agendar-citas/agendar-citas.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-busqueda-pacientes',
  standalone: true,
  imports: [CommonModule, GlobalTableComponent, MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule],
  templateUrl: './busqueda-pacientes.component.html',
  styleUrls: ['./busqueda-pacientes.component.scss']
})
export class BusquedaPacientesComponent implements OnInit {
  // Datos de ejemplo para la tabla
  dataSource: paciente[] = [
    {
      nombre: '',
      curp: '',
      telefono: ''
    },
    {
      nombre: '',
      curp: '',
      telefono: ''
    },
    {
      nombre: '',
      curp: '',
      telefono: ''
    }
  ];

  // Columnas a renderizar
  displayedColumns: string[] = ['nombre', 'curp', 'telefono'];

  constructor(
    public dialog: MatDialog,
    private routerService: RouterService
  ) {
  }

  ngOnInit(): void {
  }

  eliminar() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {body: '¿Estás seguro de que deseas realizar esta acción?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Acción confirmada');
      } else {
        console.log('Acción cancelada');
      }
    });

  }

  agendarCita(element: any) {
    this.dialog.open(AgendarCitasComponent, {
      data: element
    }).afterClosed().subscribe(result => {

    })
  }

  irCitas() {
    this.routerService.irCitasPacientes();
  }
}

interface paciente {
  nombre: string;
  curp: string;
  telefono: string;
}
