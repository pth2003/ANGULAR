import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss'],
})
export class TableviewComponent {}
