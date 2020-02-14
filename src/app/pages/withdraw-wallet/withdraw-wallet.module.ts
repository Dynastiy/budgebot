import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawWalletPageRoutingModule } from './withdraw-wallet-routing.module';

import { WithdrawWalletPage } from './withdraw-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawWalletPageRoutingModule
  ],
  declarations: [WithdrawWalletPage]
})
export class WithdrawWalletPageModule {}
