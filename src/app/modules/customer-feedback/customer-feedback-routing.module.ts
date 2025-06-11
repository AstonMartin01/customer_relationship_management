import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFeedbackComponent } from './customer-feedback.component';

const routes: Routes = [{ path: "", component: CustomerFeedbackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFeedbackRoutingModule { }
