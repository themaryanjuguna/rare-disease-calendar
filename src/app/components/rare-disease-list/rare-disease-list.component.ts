import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rare-disease-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './rare-disease-list.component.html',
  styleUrls: ['./rare-disease-list.component.css']
})
export class RareDiseaseListComponent {
  displayedColumns: string[] = ['occasion', 'rareCondition', 'date', 'updatedBy', 'emailAddress', 'actions'];
  dataSource = [
    { id: 1, occassion: 'World Narcolepsy Day', rareCondition: 'Narcolepsy', date: '2025-09-22', updatedBy: 'Maryanne Nyambura', email: 'themaryanjuguna@gmail.com' }
  ];
}
  