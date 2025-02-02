import { Component } from '@angular/core';
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
  columnDefs: ColDef[] = [
    { headerName: 'STT', field: 'stt', width: 60 },
    { headerName: 'Loại thẻ', field: 'loaiThe', width: 60 },
    { headerName: 'Vai trò', field: 'vaiTro', width: 60 },
    { headerName: 'Kênh TT', field: 'kenhTT', width: 80 },
    { headerName: 'Tài khoản', field: 'taiKhoan', width: 80 },
    { headerName: 'Tên SP', field: 'tenSP' },
    { headerName: 'Loại tiền', field: 'loaiTien', width: 80 },
    {
      headerName: 'Thao tác',
      field: 'actions',
      cellRenderer: 'actionCellRenderer',
      width: 80,
    },
  ];

  // Dữ liệu hiển thị
  rowData = [
    {
      stt: 1,
      loaiThe: 'MASTER',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '2228',
      tenSP: 'MASTER NH KHAC',
      loaiTien: 'VND',
    },
    {
      stt: 2,
      loaiThe: 'VISA',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '7019',
      tenSP: 'DICH VU CHAP NHAN THE TREN ATM',
      loaiTien: 'VND',
    },
    {
      stt: 3,
      loaiThe: 'VISA',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '7019',
      tenSP: 'DICH VU CHAP NHAN THE TREN ATM',
      loaiTien: 'VND',
    },
    {
      stt: 4,
      loaiThe: 'VISA',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '7019',
      tenSP: 'DICH VU CHAP NHAN THE TREN ATM',
      loaiTien: 'VND',
    },
    {
      stt: 5,
      loaiThe: 'VISA',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '7019',
      tenSP: 'DICH VU CHAP NHAN THE TREN ATM',
      loaiTien: 'VND',
    },
    {
      stt: 6,
      loaiThe: 'VISA',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '7019',
      tenSP: 'DICH VU CHAP NHAN THE TREN ATM',
      loaiTien: 'VND',
    },
    {
      stt: 7,
      loaiThe: 'VISA',
      vaiTro: 'ACQ',
      kenhTT: 'ATM',
      taiKhoan: '7019',
      tenSP: 'DICH VU CHAP NHAN THE TREN ATM',
      loaiTien: 'VND',
    },
  ];

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
