import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from '../../testing/activatedRouteMock';
import { Transaction } from '../model';
import { getMockTransactions } from '../../testing/mock-model/mockTransaction';
import { of } from 'rxjs';

// file.only
describe('TransactionsComponent', () => {
  function getMockActivatedRoute(): ActivatedRouteMock {
    const mock = new ActivatedRouteMock();
    mock.data = of({ transactions: getMockTransactions() });
    return mock;
  }

  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let transactions: Transaction[];

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
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
