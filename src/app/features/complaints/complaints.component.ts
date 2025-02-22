import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../search-form/search-form.component';
import { TableComponent } from '../../shared/table/table.component';
import { ColDef } from 'ag-grid-community';
import { TransactionService } from 'src/app/services/transaction.service';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule, SearchFormComponent, TableComponent],
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintsComponent {
  columnDefs: ColDef[] = [
    { headerName: 'STT', field: 'id', width: 60 },
    { headerName: 'Trạng thái TS', field: 'status', width: 150 },
    { headerName: 'CN tạo yêu cầu', field: 'requestBranch', width: 120 },
    {
      headerName: 'Đơn vị đang thực hiện',
      field: 'processingUnit',
      width: 150,
    },
    { headerName: 'Mã tra soát', field: 'trackingCode', width: 150 },
    { headerName: 'Số thẻ', field: 'cardNumber', width: 180 },
    { headerName: 'TransID', field: 'transID', width: 180 },
    { headerName: 'Ngày giao dịch', field: 'transactionDate', width: 120 },
    { headerName: 'Số tiền giao dịch', field: 'amount', width: 150 },
    { headerName: 'Loại tiền', field: 'currency', width: 80 },
    { headerName: 'Số chuẩn chi', field: 'standardNumber', width: 120 },
    { headerName: 'Mã thiết bị', field: 'deviceID', width: 100 },
    { headerName: 'Số trace', field: 'traceNumber', width: 100 },
    { headerName: 'Loại thẻ', field: 'cardType', width: 100 },
    { headerName: 'Trạng thái QT', field: 'settlementStatus', width: 120 },
  ];

  // rowData = [
  //   {
  //     stt: 1,
  //     trangThaiTS: 'Tạo TS',
  //     cnYeuCau: 123000,
  //     donViThucHien: 'TSC',
  //     maTraSoat: '232323-01',
  //     soThe: '97041812xxxx4332',
  //     transID: '2463574684678',
  //     ngayGiaoDich: '05/10/2024',
  //     soTienGiaoDich: '100.000.000',
  //     loaiTien: 'VND',
  //     soChuanChi: '055121',
  //     maThietBi: '120601',
  //     soTrace: '894478',
  //     loaiThe: 'NAPAS',
  //     trangThaiQT: 'Có QT',
  //     soPhieuXL: '055121',
  //     maTraLoi: '',
  //     thoiHanXL: '15/10/2024',
  //   },
  //   {
  //     stt: 2,
  //     trangThaiTS: 'Chờ duyệt TS',
  //     cnYeuCau: 123000,
  //     donViThucHien: 'CN gửi',
  //     maTraSoat: '232323-01',
  //     soThe: '97041812xxxx4332',
  //     transID: '2463574684678',
  //     ngayGiaoDich: '05/10/2024',
  //     soTienGiaoDich: '100.000.000',
  //     loaiTien: 'VND',
  //     soChuanChi: '055121',
  //     maThietBi: '120601',
  //     soTrace: '894478',
  //     loaiThe: 'NAPAS',
  //     trangThaiQT: 'Có QT',
  //     soPhieuXL: '055121',
  //     maTraLoi: '',
  //     thoiHanXL: '05/10/2024',
  //   },
  // ];

  private transactionService = inject(TransactionService);

  transactionsQuery = injectQuery(() => ({
    queryKey: ['transactions'],
    queryFn: () =>
      lastValueFrom(this.transactionService.getTransactions('transactions')),
  }));
  @ViewChild('tableComponent') tableComponent!: TableComponent;

  exportExcel() {
    if (this.tableComponent) {
      this.tableComponent.exportExcel();
    }
  }
}
