import { TestBed } from '@angular/core/testing';

import { TransactionResolver } from './transaction.resolver';

describe('CompanyResolver', () => {
  let resolver: TransactionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TransactionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
