import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFeedbackRoutingModule } from './customer-feedback-routing.module';
import { CustomerFeedbackComponent } from './customer-feedback.component';


@NgModule({
  declarations: [
    CustomerFeedbackComponent
  ],
  imports: [
    CommonModule,
    CustomerFeedbackRoutingModule
  ]
})
export class CustomerFeedbackModule { }
