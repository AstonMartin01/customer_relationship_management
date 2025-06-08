import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoriesRoutingModule } from './inventories-routing.module';
import { InventoriesComponent } from './inventories.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoriesComponent
  ],
  imports: [
    CommonModule,
    InventoriesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class InventoriesModule { }
