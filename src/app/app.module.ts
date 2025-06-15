import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { ClientFeedbackComponent } from './modules/client-feedback/client-feedback.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { InventoriesComponent } from './modules/inventories/inventories.component';
import { ManufacturingComponent } from './modules/manufacturing/manufacturing.component';
import { MarketingComponent } from './modules/marketing/marketing.component';
import { RepairsComponent } from './modules/repairs/repairs.component';
import { SalesComponent } from './modules/sales/sales.component';
import { BarChart2Component } from './shared/chart-widgets/bar-chart/bar-chart2.component';

// Chart.register(...registerables); // ✅ REQUIRED

@NgModule({
  declarations: [
    AppComponent,
    // ClientFeedbackComponent,
    // ClientsComponent,
    // HrComponent,
    // InventoriesComponent,
    // ManufacturingComponent,
    // MarketingComponent,
    // RepairsComponent,
    // SalesComponent,
    // SupplyChainComponent,
    // BarChart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
