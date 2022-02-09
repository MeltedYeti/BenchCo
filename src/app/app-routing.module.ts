import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionListComponent } from './transactions/components/transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsComponent,
    children: [
      {
        path: '',
        component: TransactionListComponent
      }
    ]
  },
  { path: '', redirectTo: 'transactions?page=1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
