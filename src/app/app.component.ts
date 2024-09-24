import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospitalario';
  // Datos de ejemplo para la tabla
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', editar: true, consultar: true, eliminar: false },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', editar: false, consultar: true, eliminar: true }
  ];

  // Columnas a renderizar
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
