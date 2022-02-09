import { PageDto } from './pageDto';

export interface TransactionDto {
  Date: string;
  Ledger: string;
  Amount: number;
  Company: string;
}

export interface TransactionDtoPage extends PageDto {
  transactions: TransactionDto[];
}
