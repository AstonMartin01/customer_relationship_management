import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChart2Component } from './chart-widgets/bar-chart/bar-chart2.component';
import { BarChartComponent } from '../modules/dashboard/components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [BarChart2Component, BarChartComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [BarChart2Component, BarChartComponent]
})
export class SharedModule {}