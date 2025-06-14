import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule) },
  { path: "repairs", loadChildren: () => import("./modules/repairs/repairs.module").then(m => m.RepairsModule) },
  { path: "shared", loadChildren: () => import("./shared/shared.module").then(m => m.SharedModule) },
  { path: "clients", loadChildren: () => import("./modules/clients/clients.module").then(m => m.ClientsModule) },
  { path: "inventories", loadChildren: () => import("./modules/inventories/inventories.module").then(m => m.InventoriesModule) },
  { path: "manufacturing", loadChildren: () => import("./modules/manufacturing/manufacturing.module").then(m => m.ManufacturingModule) },
  { path: "marketing", loadChildren: () => import("./modules/marketing/marketing.module").then(m => m.MarketingModule) },
  { path: "sales-finance", loadChildren: () => import("./modules/sales/sales.module").then(m => m.SalesModule) },
  { path: "suppliers", loadChildren: () => import("./modules/suppliers/suppliers.module").then(m => m.SuppliersModule) },  
  { path: "customer-feedback", loadChildren: () => import("./modules/customer-feedback/customer-feedback.module").then(m => m.CustomerFeedbackModule) },
  { path: "expenses", loadChildren: () => import("./modules/expenses/expenses.module").then(m => m.ExpensesModule) },
  { path: "incomes", loadChildren: () => import("./modules/incomes/incomes.module").then(m => m.IncomesModule) },
  { path: "deliveries", loadChildren: () => import("./modules/deliveries/deliveries.module").then(m => m.DeliveriesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
