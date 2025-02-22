import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomtextfeildComponent } from '../../shared/customtextfeild/customtextfeild.component';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { TransactionService } from 'src/app/services/transaction.service';
import { lastValueFrom, map } from 'rxjs';
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomtextfeildComponent,
  ],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchForm = new FormGroup({
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    transId: new FormControl(''),
    paymentStatus: new FormControl(''),
    reviewStatus: new FormControl(''),
    cardNumber: new FormControl(''),
    branch: new FormControl(''),
    ticketNumber: new FormControl(''),
    standardNumber: new FormControl(''),
    traceNumber: new FormControl(''),
    deviceId: new FormControl(''),
    cardType: new FormControl(''),
    dateEx: new FormControl(''),
  });
  @Output() exportExcelEvent = new EventEmitter<void>();
  exportExcel() {
    this.exportExcelEvent.emit();
  }
  private transactionService = inject(TransactionService);

  statusQuery = injectQuery(() => ({
    queryKey: ['statuses'],
    queryFn: () =>
      lastValueFrom(this.transactionService.getStatuses('statuses')),
  }));
  branchQuery = injectQuery(() => ({
    queryKey: ['branch'],
    queryFn: () =>
      lastValueFrom(this.transactionService.getBranches('branches')),
  }));

  cardQuery = injectQuery(() => ({
    queryKey: ['card'],
    queryFn: () =>
      lastValueFrom(this.transactionService.getBranches('cardTypes')),
  }));

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
