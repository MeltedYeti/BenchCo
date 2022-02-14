import { Injectable } from '@angular/core';
import { AbstractDataService } from './abstract-data.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
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

  findAll(): Observable<Transaction[]> {
    return forkJoin([
      this.findJson(1),
      this.findJson(2),
      this.findJson(3)
    ]).pipe(
      map((resp: [Page<Transaction>, Page<Transaction>, Page<Transaction>]) => {
        const result = new Array<Transaction>();
        return result.concat(resp[0].data, resp[1].data, resp[2].data);
      })
    );
  }

  findJson(page: number): Observable<Page<Transaction>> {
    const url = `assets/json-data/page-${page}.json`;
    return this.GET(url).pipe(
      map((resp: TransactionPageDto) => transactionPageFromPageDto(resp))
    );
  }
}
