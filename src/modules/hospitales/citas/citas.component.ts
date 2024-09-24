import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalTableComponent} from "../../../shared/components/global-table/global-table.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import { MatDialog } from '@angular/material/dialog';
import {RouterService} from "../../servicios/router.service";

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, GlobalTableComponent, MatButtonModule, MatIconModule],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  // Datos de ejemplo para la tabla
  dataSource: cita[] = [
    {
      hospital: 'Hospital 1',
      medico: 'Doctor 1',
      paciente: 'Paciente 1',
      fecha: '2022-01-01',
      estado: 'Asignada'
    },
    {
      hospital: 'Hospital 2',
      medico: 'Doctor 2',
      paciente: 'Paciente 2',
      fecha: '2022-01-02',
      estado: 'Asignada'
    },
    {
      hospital: 'Hospital 3',
      medico: 'Doctor 3',
      paciente: 'Paciente 3',
      fecha: '2022-01-03',
      estado: 'Asignada'
    }
  ];

  // Columnas a renderizar
  displayedColumns: string[] = ['hospital', 'medico', 'paciente', 'fecha', "estado"];

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

  irBusquedaPacientes(){
    this.routerService.irBusquedaPacientes();
  }
}

interface cita {
  hospital: string;
  medico: string;
  paciente: string;
  fecha: string;
  estado: string;
}
