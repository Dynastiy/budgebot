import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetTypePageRoutingModule } from './budget-type-routing.module';

import { BudgetTypePage } from './budget-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetTypePageRoutingModule
  ],
  declarations: [BudgetTypePage]
})
export class BudgetTypePageModule {}
