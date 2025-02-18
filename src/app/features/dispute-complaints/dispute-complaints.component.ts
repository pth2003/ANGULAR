import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { TableComponent } from '../../shared/table/table.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { FileRelatedComponent } from '../file-related/file-related.component';

@Component({
  selector: 'app-dispute-complaints',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    FileUploadComponent,
    FileRelatedComponent,
  ],
  templateUrl: './dispute-complaints.component.html',
  styleUrls: ['./dispute-complaints.component.scss'],
})
export class DisputeComplaintsComponent {
  columnDefs: ColDef[] = [
    { headerName: 'STT', field: 'stt', width: 60 },
    { headerName: 'Mã tra soát', field: 'mts', width: 60 },
    { headerName: 'Mã trả lời', field: 'mtl', width: 60 },
    { headerName: 'Số tiền hoàn trả', field: 'cash', width: 80 },
    { headerName: 'Loại tiền hoàn trả', field: 'loaiTien', width: 60 },
    { headerName: 'Số phiếu xử lý', field: 'number', width: 60 },
    { headerName: 'Ngày tạo phiếu xử lý', field: 'date', width: 50 },
    { headerName: 'Ghi chú xử lý', field: 'note', width: 100 },
  ];
  rowData = [
    {
      stt: 1,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 2,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 3,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 4,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 5,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 6,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
    {
      stt: 7,
      mts: '970418xxxxxx4332',
      mtl: '301 - Hoàn trả tra soát toàn phần',
      cash: '100.000.000',
      loaiTien: 'VND',
      number: '2463574684678',
      date: '05/10/2024',
      note: 'TTCSKH + PYC 1012319200 + 45 NGAY LAM VIEC GIAO DICH KHONG THANH CONG...',
    },
  ];
}
