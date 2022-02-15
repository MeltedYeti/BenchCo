import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { Transaction } from '../model';

@Component({
  selector: 'bch-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  host: { class: 'bch-transactions' }
})
export class TransactionsComponent implements OnInit, OnDestroy {
  private readonly _onDestroy = new Subject();

  readonly columns: string[] = ['date', 'company', 'ledger', 'amount'];

  transactions: Transaction[] = [];

  constructor(
    private _route: ActivatedRoute
  ) {}

  calculateTotal(): number {
    const initialAmount: number = 0;
    return this.transactions.reduce((total: number, transaction: Transaction) => {
      return +total + +transaction.amount;
    }, initialAmount);
  }

  ngOnInit(): void {
    this._route.data.pipe(
      map(d => d['transactions']),
      takeUntil(this._onDestroy)
    ).subscribe((data: Transaction[]) => {
      this.transactions = data;
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next(undefined);
  }

}
