import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingComponent } from './marketing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MarketingComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MarketingModule { }
