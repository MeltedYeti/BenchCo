import { Injectable } from '@angular/core';
import { AbstractDataService } from './abstract-data.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TransactionPageDto } from './dto';
import { Page, Transaction, transactionPageFromPageDto } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends AbstractDataService {

  readonly basePath = '/transactions';

  constructor(http: HttpClient) {
    super(http);
  }

  find(page: number): Observable<Page<Transaction>> {
    // 10 per page
    const url = this.getUrl(`?${page}.json`);

    return this.GET(url).pipe(
      map((resp: TransactionPageDto) => transactionPageFromPageDto(resp))
    );
  }

  findJson(page: number): Observable<Page<Transaction>> {
    const url = `assets/json-data/page-${page}.json`;
    return this.GET(url).pipe(
      map((resp: TransactionPageDto) => transactionPageFromPageDto(resp))
    );
  }
}
