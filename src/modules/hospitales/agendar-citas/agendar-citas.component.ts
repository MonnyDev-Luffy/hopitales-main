import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendar-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.scss']
})
export class AgendarCitasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
