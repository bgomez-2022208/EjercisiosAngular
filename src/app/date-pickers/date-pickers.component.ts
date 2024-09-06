import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Component} from "@angular/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-date-pickers',
  templateUrl: './date-pickers.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  styleUrls: ['./date-pickers.component.css']
})
export class DatePickersComponent {

}
