import { Component, OnInit } from '@angular/core';

import { Car } from '../shared/models/car';
import { LoggerService } from './car-tool/services/logger.service';
import { CarsService } from './car-tool/services/cars.service';

const carsServiceFactory = (loggerService: LoggerService) => {
  return new CarsService(loggerService);
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: LoggerService, useClass: LoggerService },
    { provide: CarsService, useFactory: carsServiceFactory, deps: [ LoggerService ] }
  ]
})
export class AppComponent implements OnInit {
  public title = 'app works!';

  constructor(private cars: CarsService) {}

  ngOnInit() {

  }

  public addCar(newCar: Car) {
    this.cars.addCar(newCar);
  }

}
