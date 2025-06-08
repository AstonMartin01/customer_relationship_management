import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUsersRoutingModule } from './end-users-routing.module';
import { EndUsersComponent } from './end-users.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EndUsersComponent
  ],
  imports: [
    CommonModule,
    EndUsersRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class EndUsersModule { }
