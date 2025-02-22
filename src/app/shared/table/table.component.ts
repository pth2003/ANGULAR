import { Component, Input, ViewChild } from '@angular/core';
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

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
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
  @Input() rowData: any = []; // Dữ liệu từ component cha
  @Input() columnDefs: ColDef[] = []; // Cấu hình cột từ component cha
  @Input() showPagination = true;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

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
  exportExcel() {
    const rowData: any[] = [];
    this.agGrid.api.forEachNode((node) => rowData.push(node.data));

    // Chuyển dữ liệu thành file Excel
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Xuất file Excel
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'data.xlsx');
  }
}
