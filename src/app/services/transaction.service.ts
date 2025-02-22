import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

import {
  ApiResponse,
  Transaction,
  Status,
  Branch,
  CardType,
} from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  getTransactions(endpoint: string, params?: any): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/${endpoint}`, {
      params,
    });
  }
  getStatuses(endpoint: string, params?: any): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.apiUrl}/${endpoint}`, {
      params,
    });
  }
  getBranches(endpoint: string, params?: any): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${this.apiUrl}/${endpoint}`, {
      params,
    });
  }
  getCardTypes(endpoint: string, params?: any): Observable<CardType[]> {
    return this.http.get<CardType[]>(`${this.apiUrl}/${endpoint}`, {
      params,
    });
  }
}
