import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuppliersComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuppliersRoutingModule,
    FormsModule
  ],
  exports: []
})
export class SuppliersModule {}
