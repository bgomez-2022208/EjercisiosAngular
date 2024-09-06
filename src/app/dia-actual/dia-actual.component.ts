import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";

@Component({
  selector: 'app-dia-actual',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './dia-actual.component.html',
  styleUrls: ['./dia-actual.component.css']
})
export class DiaActualComponent {
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date(2023, 0, 1);
    this.maxDate = new Date();
  }
}
