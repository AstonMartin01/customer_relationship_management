import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFeedbackRoutingModule } from './client-feedback-routing.module';
import { ClientFeedbackComponent } from './client-feedback.component';


@NgModule({
  declarations: [
    ClientFeedbackComponent
  ],
  imports: [
    CommonModule,
    ClientFeedbackRoutingModule
  ]
})
export class ClientFeedbackModule { }
