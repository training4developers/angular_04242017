import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarRowComponent } from './components/car-row/car-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { RequiredValidatorDirective } from './directives/required-validator.directive';
import { LoggerService } from './services/logger.service';
import { CarsService } from './services/cars.service';
import { carToolRouterModule } from './car-tool.router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    carToolRouterModule,
  ],
  declarations: [
    CarTableComponent,
    CarRowComponent,
    CarFormComponent,
    RequiredValidatorDirective,
  ],
  exports: [
    CarTableComponent,
    CarFormComponent
  ],
  providers: [
  ],
})
export class CarToolModule { }
