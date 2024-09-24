import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {GlobalCardComponent} from "../../../shared/components/global-card/global-card.component";
import {Component, Inject, OnInit} from "@angular/core";


@Component({
  selector: 'app-agendar-citas',
  standalone: true,
  imports: [CommonModule, GlobalCardComponent, MatButtonModule, MatDialogModule, ReactiveFormsModule, MatOptionModule, MatInputModule, MatSelectModule],
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.scss']
})
export class AgendarCitasComponent implements OnInit {
  citaForm: FormGroup;

  hospitales = [
    {id: 1, nombre: 'Hospital A'},
    {id: 2, nombre: 'Hospital B'},
    {id: 3, nombre: 'Hospital C'}
  ];

  medicos = [
    {id: 1, nombre: 'Dr. Juan Pérez'},
    {id: 2, nombre: 'Dra. María López'},
    {id: 3, nombre: 'Dr. Carlos García'}
  ];

  constructor(
    public dialogRef: MatDialogRef<AgendarCitasComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.citaForm = this.fb.group({
      hospital: ['', Validators.required],
      medico: ['', Validators.required],
      fechaCita: ['', Validators.required],
      horaCita: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data.paciente) {
      this.citaForm.patchValue({
        hospital: 1,
        medico: 1,
        fechaCita: this.data.fecha,
        horaCita: '09:00' // Puedes asignar una hora por defecto si no la tienes en los datos
      });
      this.data.nombre = this.data.paciente;
      this.data.afiliacion = this.data.fecha;
    }
  }

  onConfirm() {
    if (this.citaForm.valid) {
      console.log('Datos de la cita:', this.citaForm.value);
    } else {
      console.log('El formulario no es válido');
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
