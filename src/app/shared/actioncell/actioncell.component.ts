import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actioncell',
  standalone: true,
  imports: [CommonModule, TuiIcon],
  templateUrl: './actioncell.component.html',
  styleUrls: ['./actioncell.component.scss'],
})
export class ActioncellComponent implements ICellRendererAngularComp {
  params: any;
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
  onEdit() {
    console.log('chỉnh sửa');
  }
  onDelete() {
    console.log('xóa');
  }
}
