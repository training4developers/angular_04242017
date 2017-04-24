import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarRowComponent } from './components/car-row/car-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ CarTableComponent, CarRowComponent, CarFormComponent ],
  exports: [ CarTableComponent, CarFormComponent ],
})
export class CarToolModule { }
