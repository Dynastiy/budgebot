import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPage } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPage,
    // children: [
    //   {
    //     path: 'budget-type',
    //     loadChildren: () => import('../budget-type/budget-type.module').then( m => m.BudgetTypePageModule)
    //   },
    // ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPageRoutingModule {}
