import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, TuiPagination],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  public paginationPageSizeSelector: number[] = [5, 7, 10, 20];
  public paginationPageSize: number = 7;
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() gridApi!: GridApi;

  protected length = 10;

  protected index = 0;

  goToPage(index: number): void {
    this.gridApi.paginationGoToPage(index);
  }

  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;

    this.paginationPageSize = Number(selectElement.value);
    this.pageSizeChange.emit(this.paginationPageSize);
  }
}
