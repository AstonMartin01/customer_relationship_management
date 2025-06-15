import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFeedbackComponent } from './client-feedback.component';


const routes: Routes = [{ path: "", component: ClientFeedbackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFeedbackRoutingModule { }
