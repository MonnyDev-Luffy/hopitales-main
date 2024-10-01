import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalTableComponent} from "../../../shared/components/global-table/global-table.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {RouterService} from "../../servicios/router.service";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {AgendarCitasComponent} from "../agendar-citas/agendar-citas.component";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, GlobalTableComponent, MatButtonModule, MatIconModule, MatCardModule, MatTooltipModule],
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  // Datos de ejemplo para la tabla
  dataSource: cita[] = [
    {
      paciente: 'Agripino Hernández Gómez',
      curp: 'ALBD700811MCHRJR89',
      telefono: '55 6508 7246',
    },
    {
      paciente: 'Josefina Montes de Oca',
      curp: 'JUMC961114HCHCDF31',
      telefono: '55 5632 1100',
    },
    {
      paciente: 'Lisa Antonia Peralta De la luz',
      curp: 'LVZL160905MASQUH43',
      telefono: '55 7190 4377',
    }
  ];

  // Columnas a renderizar
  displayedColumns: string[] = ['paciente', 'curp', 'telefono'];

  constructor(
    public dialog: MatDialog,
    private routerService: RouterService
  ) {
  }

  ngOnInit(): void {
  }

  irHome() {
    console.log('irHome');
    this.routerService.irHome()
  }

  eliminar() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {body: '¿Está seguro de realizar esta acción?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Acción confirmada');
      } else {
        console.log('Acción cancelada');
      }
    });
  }

  editar(element: any) {
    this.dialog.open(AgendarCitasComponent, {
      data: element
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log('Acción confirmada');
      } else {
        console.log('Acción cancelada');
      }
    })
  }

  realizado() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {body: '¿Está seguro de realizar esta acción?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Acción confirmada');
      } else {
        console.log('Acción cancelada');
      }
    });
  }

  irRegistrarPacientes(){
    this.routerService.irRegistrarPacientes();
  }
}

interface cita {
  paciente: string;
  curp: string;
  telefono: string;
}
