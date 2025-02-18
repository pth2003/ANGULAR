import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';

import {
  AllCommunityModule,
  ColDef,
  GridApi,
  ModuleRegistry,
  Theme,
  themeQuartz,
} from 'ag-grid-community';
import { ActioncellComponent } from '../actioncell/actioncell.component';
import { PaginationComponent } from '../pagination/pagination.component';

ModuleRegistry.registerModules([AllCommunityModule]);
const myTheme = themeQuartz.withParams({
  headerTextColor: 'white',
  headerBackgroundColor: '#167775',
});
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, AgGridAngular, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public theme: Theme | 'legacy' = myTheme;
  public paginationPageSize: number = 5;
  @Input() rowData: any[] = []; // Dữ liệu từ component cha
  @Input() columnDefs: ColDef[] = []; // Cấu hình cột từ component cha
  @Input() showPagination = true;
  // Định nghĩa cài đặt mặc định cho các cột
  defaultColDef = {
    // resizable: true,
  };
  frameworkComponents = {
    actionCellRenderer: ActioncellComponent,
  };
  gridApi!: GridApi;
  onGridReady(params: any) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }
  onGridSizeChanged(params: any) {
    params.api.sizeColumnsToFit();
  }
  updatePageSize(newSize: number) {
    this.paginationPageSize = newSize;
  }
}
