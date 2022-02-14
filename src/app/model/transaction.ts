import { TransactionDto, TransactionPageDto } from '../data/dto';
import { Page } from './page';

export class Transaction {
  public date: string;
  public ledger: string;
  public amount: number;
  public company: string;

  public constructor(
    date: string    = '',
    ledger: string  = '',
    amount: number  = 0,
    company: string = ''
  ) {
    this.date = date;
    this.ledger = ledger;
    this.amount = amount;
    this.company = company;
  }
}

export const transactionFromTransactionDto = (dto: TransactionDto): Transaction => {
  return new Transaction(
    dto.Date,
    dto.Ledger,
    dto.Amount,
    dto.Company
  );
};

export const transactionPageFromPageDto = (dto: TransactionPageDto): Page<Transaction> => {
  return new Page<Transaction>(
    dto.totalCount,
    dto.page,
    dto.transactions.map(transactionFromTransactionDto)
  );
};
