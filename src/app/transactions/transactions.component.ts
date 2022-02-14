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
  page: number = 1;
  total: number = 0;

  constructor(
    private _route: ActivatedRoute
  ) {}

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
