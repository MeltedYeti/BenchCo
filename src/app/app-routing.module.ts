import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionResolver } from './data/resolver/transaction.resolver';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsComponent,
    resolve: {
      transactions: TransactionResolver
    }
  },
  { path: '', redirectTo: 'transactions?page=1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
