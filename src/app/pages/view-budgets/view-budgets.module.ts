import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewBudgetsPageRoutingModule } from './view-budgets-routing.module';

import { ViewBudgetsPage } from './view-budgets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewBudgetsPageRoutingModule
  ],
  declarations: [ViewBudgetsPage]
})
export class ViewBudgetsPageModule {}
