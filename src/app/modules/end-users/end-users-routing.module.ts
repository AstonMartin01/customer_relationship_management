import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUsersComponent } from './end-users.component';

const routes: Routes = [{ path: '', component: EndUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndUsersRoutingModule { }
