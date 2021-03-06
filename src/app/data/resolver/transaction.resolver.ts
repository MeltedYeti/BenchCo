import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class TransactionResolver implements Resolve<Observable<Transaction[]>> {

  private _transactionService: TransactionService;

  public constructor(
    private transactionService: TransactionService
  ) {
    this._transactionService = transactionService;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transaction[]> {
    return this._transactionService.findAll();
  }
}
