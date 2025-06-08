import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuppliersRoutingModule } from './suppliers-routing.module'; // adăugat
import { BarChart2Component } from 'src/app/shared/chart-widgets/bar-chart/bar-chart2.component';
import { SharedComponent } from 'src/app/shared/shared.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuppliersComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuppliersRoutingModule,
    FormsModule
  ],
  exports: []
})
export class SuppliersModule {}
