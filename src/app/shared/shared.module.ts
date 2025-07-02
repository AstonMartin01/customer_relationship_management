import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChart2Component } from './chart-widgets/bar-chart/bar-chart2.component';
import { BarChartComponent } from '../modules/dashboard/components/bar-chart/bar-chart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BarChart2Component, BarChartComponent],
  imports: [CommonModule, NgChartsModule, FormsModule, RouterModule],
  exports: [BarChart2Component, BarChartComponent]
})
export class SharedModule {}