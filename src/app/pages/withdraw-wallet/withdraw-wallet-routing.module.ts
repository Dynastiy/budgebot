import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawWalletPage } from './withdraw-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawWalletPageRoutingModule {}
