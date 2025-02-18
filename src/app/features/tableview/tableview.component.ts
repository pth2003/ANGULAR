import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss'],
})
export class TableviewComponent {
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
}
