import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSubPageRoutingModule } from './view-sub-routing.module';

import { ViewSubPage } from './view-sub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSubPageRoutingModule
  ],
  declarations: [ViewSubPage]
})
export class ViewSubPageModule {}
