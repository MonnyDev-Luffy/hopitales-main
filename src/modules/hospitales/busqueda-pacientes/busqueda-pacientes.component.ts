import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GlobalTableComponent} from "../../../shared/components/global-table/global-table.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {RouterService} from "../../servicios/router.service";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-busqueda-pacientes',
  standalone: true,
  imports: [CommonModule, GlobalTableComponent, MatButtonModule, MatIconModule],
  templateUrl: './busqueda-pacientes.component.html',
  styleUrls: ['./busqueda-pacientes.component.scss']
})
export class BusquedaPacientesComponent implements OnInit {
  // Datos de ejemplo para la tabla
  dataSource: paciente[] = [
    {
      nombre: 'Paciente 1',
      afiliacion: '12/12/2022'
    },
    {
      nombre: 'Paciente 2',
      afiliacion: '12/12/2022'
    },
    {
      nombre: 'Paciente 3',
      afiliacion: '12/12/2022'
    }
  ];

  // Columnas a renderizar
  displayedColumns: string[] = ['nombre', 'afiliacion'];

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

  irCitas(){
    this.routerService.irCitasPacientes();
  }
}

interface paciente {
  nombre: string;
  afiliacion: string;
}
