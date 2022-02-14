import { PageDto } from './pageDto';

export interface TransactionDto {
  Date: string;
  Ledger: string;
  Amount: number;
  Company: string;
}

export interface TransactionPageDto extends PageDto {
  transactions: TransactionDto[];
}
