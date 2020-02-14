import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/overview',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../overview/overview.module').then( m => m.OverviewPageModule)
      },
      {
        path: 'view-budgets',
        loadChildren: () => import('../view-budgets/view-budgets.module').then( m => m.ViewBudgetsPageModule)
      },
      {
        path: 'view-sub',
        loadChildren: () => import('../view-sub/view-sub.module').then( m => m.ViewSubPageModule)
      },
      {
        path: 'billing',
        loadChildren: () => import('../billing/billing.module').then( m => m.BillingPageModule)
      },
      {
        path: 'withdrawal',
        loadChildren: () => import('../withdrawal/withdrawal.module').then( m => m.WithdrawalPageModule)
      },
      {
        path: 'security',
        loadChildren: () => import('../security/security.module').then( m => m.SecurityPageModule)
      },
      {
        path: 'kyc',
        loadChildren: () => import('../kyc/kyc.module').then( m => m.KycPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then( m => m.WalletPageModule)
      },
      {
        path: 'fund-wallet',
        loadChildren: () => import('../fund-wallet/fund-wallet.module').then( m => m.FundWalletPageModule)
      },
      {
        path: 'withdraw-wallet',
        loadChildren: () => import('../withdraw-wallet/withdraw-wallet.module').then( m => m.WithdrawWalletPageModule)
      },
      {
        path: 'refferal',
        loadChildren: () => import('../refferal/refferal.module').then( m => m.RefferalPageModule)
      },
      {
        path: 'quick-links',
        loadChildren: () => import('../quick-links/quick-links.module').then( m => m.QuickLinksPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../blog/blog.module').then( m => m.BlogPageModule)
      },
      {
        path: 'testimonial',
        loadChildren: () => import('../testimonial/testimonial.module').then( m => m.TestimonialPageModule)
      },
      {
        path: 'faqs',
        loadChildren: () => import('../faqs/faqs.module').then( m => m.FAQsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
