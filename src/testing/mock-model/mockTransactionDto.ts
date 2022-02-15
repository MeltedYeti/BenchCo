import { TransactionDto, TransactionPageDto } from '../../app/data/dto';

export function getMockTransactionDto(): TransactionDto {
  return {
    Company: 'ACME',
    Ledger: 'Ledger',
    Amount: 2.5,
    Date: '2011-05-25'
  };
}

export function getMockTransactionPageDto(page: number = 1): TransactionPageDto {
  return {
    page: page,
    totalCount: 1,
    transactions: [getMockTransactionDto()]
  };
}
