import { Component, Output, EventEmitter, InjectionToken, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { Car } from '../../../../shared/models/car';

interface Tracker {
  track: () => void;
}

const TRACKER_TOKEN = new InjectionToken<Tracker>('tracker');

class WebTracker implements Tracker {
  track() {
    console.log('tracking you on the web');
  }
}

const carTracker: Tracker = {
  track() {
    console.log('tracking you in your car');
  }
}

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
  providers: [
    { provide: TRACKER_TOKEN, useClass: WebTracker, multi: true },
    { provide: TRACKER_TOKEN, useValue: carTracker, multi: true },
  ]
})
export class CarFormComponent {

  public newCarForm = new FormGroup({
    carMakeInput: new FormControl(''),
  });

  @Output()
  public onCarSubmit = new EventEmitter<Car>();

  constructor(@Inject(TRACKER_TOKEN) private tracker: Tracker[]) {
    console.log(this.tracker);
  }

  public submitCar() {

    const car: Car = {
        make: this.newCarForm.value.carMakeInput,
    } as Car;

    this.onCarSubmit.emit(car);
  }

}
