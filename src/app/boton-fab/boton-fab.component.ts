import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-boton-fab',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  templateUrl: './boton-fab.component.html',
  styleUrls: ['./boton-fab.component.css']
})
export class BotonFabComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BotonFabComponent>
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onConfirm(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.get('name')?.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
