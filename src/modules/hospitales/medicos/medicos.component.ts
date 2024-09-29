import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from "@angular/material/dialog";
import {RouterService} from "../../servicios/router.service";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {AgendarCitasComponent} from "../agendar-citas/agendar-citas.component";
import {GlobalTableComponent} from "../../../shared/components/global-table/global-table.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule, GlobalTableComponent, MatButtonModule, MatIconModule, MatCardModule, MatTooltipModule],
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  // Datos de ejemplo para la tabla
  dataSource: cita[] = [
    {
      hospital: 'Hospital General',
      medico: 'José Luis Montes',
      cedula: '10258284',
      especialidad: 'Médicina general',
      estado: 'Disponible'
    },
    {
      hospital: 'Hospital Siglo XXI',
      medico: 'Elizabeth Martínez González',
      cedula: '10283450',
      especialidad: 'Pediatría',
      estado: 'Disponible'
    },
    {
      hospital: 'Hospital Médica Sur',
      medico: 'Raymundo Pérez Pérez',
      cedula: '16071773',
      especialidad: 'Ginecología',
      estado: 'Disponible'
    }
  ];

  // Columnas a renderizar
  displayedColumns: string[] = ['hospital', 'medico', 'cedula', 'especialidad', "estado"];

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

  irRegistrarMedicos(){
    this.routerService.irRegistrarMedicos();
  }
}

interface cita {
  hospital: string;
  medico: string;
  cedula: string;
  especialidad: string;
  estado: string;
}
