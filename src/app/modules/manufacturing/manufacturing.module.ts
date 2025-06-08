import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { ManufacturingComponent } from './manufacturing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManufacturingComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ManufacturingModule { }
