import SpyObj = jasmine.SpyObj;
import { TransactionService } from '../../app/data/transaction.service';

export function getMockTransactionService(): SpyObj<TransactionService> {
  return jasmine.createSpyObj(['find', 'findAll', 'findJson']);
}
