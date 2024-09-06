import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Importación necesaria

@Component({
  selector: 'app-stepper-config',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule, // Importar el módulo del Slide Toggle
  ],
  templateUrl: './stepper-config.component.html',
  styleUrls: ['./stepper-config.component.css']
})
export class StepperConfigComponent {
  firstFormGroup = this._formBuilder.group({
    birthDateCtrl: ['', [Validators.required, this.birthDateValidator]],
  });

  secondFormGroup = this._formBuilder.group({
    nameCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  });

  thirdFormGroup = this._formBuilder.group({
    dpiToggle: [false], // Toggle DPI desactivado por defecto
    dpiCtrl: [{ value: '', disabled: true }, Validators.required], // Campo de DPI deshabilitado inicialmente
  });

  constructor(private _formBuilder: FormBuilder) {
    // Habilitar o deshabilitar el campo de DPI según el estado del toggle
    this.thirdFormGroup.get('dpiToggle')?.valueChanges.subscribe((toggleValue) => {
      if (toggleValue) {
        this.thirdFormGroup.get('dpiCtrl')?.enable();
      } else {
        this.thirdFormGroup.get('dpiCtrl')?.disable();
      }
    });
  }

  // Validador personalizado para verificar que la fecha es menor a la fecha actual
  birthDateValidator(control: AbstractControl) {
    const today = new Date();
    const birthDate = new Date(control.value);
    return birthDate < today ? null : { invalidDate: true };
  }
}
