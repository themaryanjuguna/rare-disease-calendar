import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-root',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns: string[] = [
    'id',
    'occasion',
    'rareCondition',
    'date',
    'updatedBy',
    'emailAddress',
  ];
  
  // Assign rareDiseases to MatTableDataSource
  dataSource = new MatTableDataSource([
    {
      id: 1,
      occasion: 'World Narcolepsy Day',
      rareCondition: 'Narcolepsy',
      date: '2025-09-22',
      updatedBy: 'Maryanne Nyambura',
      emailAddress: 'themaryanjuguna@gmail.com',
    },
  ]);

  // Filter and paginator example (optional)
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}