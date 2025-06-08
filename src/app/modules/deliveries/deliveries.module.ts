import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveriesComponent } from './deliveries.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DeliveriesComponent
  ],
  imports: [
    CommonModule,
    DeliveriesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DeliveriesModule { }
