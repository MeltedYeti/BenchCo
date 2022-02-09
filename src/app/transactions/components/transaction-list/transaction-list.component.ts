import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bch-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  host: { class: 'bch-transaction-list' }
})
export class TransactionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
