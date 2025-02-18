import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/table/table.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-file-related',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './file-related.component.html',
  styleUrls: ['./file-related.component.scss'],
})
export class FileRelatedComponent {
  columnDefs: ColDef[] = [
    { headerName: 'STT', field: 'stt', width: 30 },
    { headerName: 'Hồ sơ/chứng từ', field: 'file', width: 80 },
    { headerName: 'Mô tả', field: 'detail', width: 60 },
    { headerName: 'Mã tra soát', field: 'mts', width: 60 },
    { headerName: 'Ngày cập nhật', field: 'date', width: 60 },
    { headerName: 'Người cập nhật', field: 'userUpdate', width: 80 },

    {
      headerName: 'Thao tác',
      field: 'actions',
      cellRenderer: 'actionCellRenderer',
      width: 80,
    },
  ];
  rowData = [
    {
      stt: 1,
      file: 'Mã CN_TransiD_tenfile.docx',
      detail: 'Hồ sơ/chứng từ tra soát 1',
      mts: '2463574684678_1',
      date: '25/10/2024',
      userUpdate: '125423 - Nguyễn Văn A',
    },
    {
      stt: 2,
      file: 'Mã CN_TransiD_tenfile.docx',
      detail: 'Hồ sơ/chứng từ tra soát 1',
      mts: '2463574684678_1',
      date: '25/10/2024',
      userUpdate: '125423 - Nguyễn Văn A',
    },
  ];
}
