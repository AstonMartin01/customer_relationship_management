import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairsRoutingModule } from './repairs-routing.module';
import { RepairsComponent } from './repairs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RepairsComponent
  ],
  imports: [
    CommonModule,
    RepairsRoutingModule,
    SharedModule,
    FormsModule    
  ]
})
export class RepairsModule { }
