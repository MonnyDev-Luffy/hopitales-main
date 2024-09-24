import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-card.component.html',
  styleUrls: ['./global-card.component.scss']
})
export class GlobalCardComponent implements OnInit {
  @Input() title: string = '';  // Título de la card

  constructor() { }

  ngOnInit(): void {
  }

}
