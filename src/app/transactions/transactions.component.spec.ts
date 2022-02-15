import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../model';
import { of } from 'rxjs';
import { getMockTransactions } from '../../testing/mock-model';
import { ActivatedRouteMock } from '../../testing';

describe('TransactionsComponent', () => {
  function getMockActivatedRoute(): ActivatedRouteMock {
    const mock = new ActivatedRouteMock();
    mock.data = of({ transactions: getMockTransactions() });
    return mock;
  }

  let sut: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let transactions: Transaction[];
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionsComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: getMockActivatedRoute() }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    transactions = getMockTransactions();
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(TransactionsComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should set the transactions from the route data', () => {
    expect(sut.transactions).toEqual(transactions);
  });

  it('should calculate the total amount of all transactions', () => {
    const expectedTotal = 356.56;

    expect(sut.calculateTotal()).toEqual(expectedTotal);
  });
});
