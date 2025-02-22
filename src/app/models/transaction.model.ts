export interface Transaction {
  id: number;
  status: string;
  requestBranch: number;
  processingUnit: string;
  trackingCode: string;
  cardNumber: string;
  transID: string;
  transactionDate: string;
  amount: number;
  currency: string;
  standardNumber: string;
  deviceID: string;
  traceNumber: string;
  cardType: string;
  settlementStatus: string;
}

export interface Status {
  value: string;
  label: string;
}

export interface Branch {
  value: string;
  label: string;
}

export interface CardType {
  value: string;
  label: string;
}

export interface ApiResponse {
  transactions: Transaction[];
  statuses: Status[];
  branches: Branch[];
  cardTypes: CardType[];
}
