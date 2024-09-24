import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {RouterService} from "../../modules/servicios/router.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private routerService: RouterService
  ) {
  }

  ngOnInit(): void {
  }

  irHome() {
    console.log('irHome');
    this.routerService.irHome()
  }

  irCitasPacientes() {
    console.log('irCitasPacientes');
    this.routerService.irCitasPacientes().then(r => false)
  }

}
