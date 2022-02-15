import { TestBed } from '@angular/core/testing';

import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from '../transaction.service';
import { getMockTransactionService } from '../../../testing/mock-service';

describe('TransactionResolver', () => {
  let resolver: TransactionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TransactionService, useValue: getMockTransactionService() }
      ]
    });
    resolver = TestBed.inject(TransactionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
