import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject } from 'rxjs';
import { Page, Transaction } from '../model';

@Component({
  selector: 'bch-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  host: { class: 'bch-transactions' }
})
export class TransactionsComponent implements OnInit, OnDestroy {
  private readonly _onDestroy = new Subject();

  readonly columns: string[] = [
    'date', 'company', 'ledger', 'amount'
  ];

  public transactions: Transaction[] = [];
  public page: number = 1;
  public total: number = 0;

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.data.pipe(
      map(d => d['transactions'])
    ).subscribe((page: Page<Transaction>) => {
      this.transactions = page.data;
      this.total = page.totalCount;
      this.page = page.page;
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next(undefined);
  }

}
