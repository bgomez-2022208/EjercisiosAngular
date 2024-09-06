import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DatePickersComponent } from "./date-pickers/date-pickers.component";
import { DiaActualComponent } from "./dia-actual/dia-actual.component";
import { MonthYearComponent } from "./month-year/month-year.component";
import { FormatoMesComponent } from "./formato-mes/formato-mes.component";
import { BotonFabComponent } from "./boton-fab/boton-fab.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {TablaConfigComponent} from "./tabla-config/tabla-config.component";
import {StepperConfigComponent} from "./stepper-config/stepper-config.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterModule,
    RouterOutlet,
    DatePickersComponent,
    DiaActualComponent,
    MonthYearComponent,
    FormatoMesComponent,
    BotonFabComponent,
    MatDialogModule,
    TablaConfigComponent,
    StepperConfigComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datePickers';
  name?: string;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {}

  navigateToDatePickers() {
    this.router.navigate(['/pickers']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BotonFabComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.name = result;
      }
    });
  }
}
