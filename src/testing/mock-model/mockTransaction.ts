import { Transaction } from '../../app/model';

export function getMockTransactions(): Transaction[] {
  return [
    new Transaction('2020-10-31', 'Ledger 1', 456.56, 'Foo and Co.'),
    new Transaction('2018-03-17', 'Ledger 2', -100, 'Bar-co'),
  ];
}
