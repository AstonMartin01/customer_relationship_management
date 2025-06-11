import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
// import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { HorizontalBarChartComponent } from './components/horizontal-bar-chart/horizontal-bar-chart.component';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: "", component: OverviewComponent }];

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    StatisticsComponent,
    // BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    HorizontalBarChartComponent,
    AreaChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule.forChild(routes),
    NgChartsModule,
    SharedModule
  ],
  exports: [DashboardComponent, PieChartComponent, LineChartComponent, DoughnutChartComponent, HorizontalBarChartComponent],
})
export class DashboardModule { }
