import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBudgetsPage } from './view-budgets.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBudgetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBudgetsPageRoutingModule {}
