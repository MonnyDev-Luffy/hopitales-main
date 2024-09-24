import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalesRoutingModule } from './hospitales-routing.module';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HospitalesRoutingModule,
    MatDialogModule
  ]
})
export class HospitalesModule { }
