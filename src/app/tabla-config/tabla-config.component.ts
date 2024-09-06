import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  position: number;
  edad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Brandon', edad: 16 },
  { position: 2, name: 'Gerson', edad: 40 },
  { position: 3, name: 'Ramirez', edad: 17 },
  { position: 4, name: 'Galicia', edad: 23 },
  { position: 5, name: 'Fernando', edad: 10 },
  { position: 6, name: 'Herlin', edad: 12 },
  { position: 7, name: 'Juan', edad: 14 },
  { position: 8, name: 'Pedro', edad: 15 },
  { position: 9, name: 'Elizabeth', edad: 18 },
  { position: 10, name: 'Neon', edad: 20 },
  { position: 11, name: 'Victor', edad: 22 },
  { position: 12, name: 'Larissa', edad: 24 }
];

@Component({
  selector: 'app-tabla-config',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './tabla-config.component.html',
  styleUrls: ['./tabla-config.component.css']
})
export class TablaConfigComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'edad'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      return data.name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
