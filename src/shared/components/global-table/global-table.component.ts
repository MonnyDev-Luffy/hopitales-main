import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-global-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss']
})
export class GlobalTableComponent implements OnInit {
  // Inputs para los datos, las columnas, y el contenedor de acciones
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() actionsTemplate!: TemplateRef<any>; // Referencia al ng-container del componente padre

  constructor() { }

  ngOnInit(): void {
  }

}
