import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Car } from '../../../../shared/models/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {

  public newCarForm = new FormGroup({
    carMakeInput: new FormControl(''),
  });

  @Output()
  public onCarSubmit = new EventEmitter<Car>();

  public submitCar() {

    const car: Car = {
        make: this.newCarForm.value.carMakeInput,
    } as Car;

    this.onCarSubmit.emit(car);
  }

}
