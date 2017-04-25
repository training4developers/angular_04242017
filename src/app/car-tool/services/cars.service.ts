import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { Car } from '../../../shared/models/car';

let instanceId = 0;

@Injectable()
export class CarsService {

  private instanceId: number;

  private cars: Car[] = [
    { make: 'Toyota', model: 'Yaris', year: 2007, color: 'blue', price: 5000 },
    { make: 'Ford', model: 'Fusion', year: 2010, color: 'black', price: 15000 },
  ];

  constructor(private logger: LoggerService) {
    this.instanceId = ++instanceId;
    this.logger.log('create cars instance id: ' + this.instanceId);
  }

  public getAll() {
    this.logger.log('cars get all instance id: ' + this.instanceId);
    return this.cars;
  }

  public addCar(car: Car) {
    this.logger.log('cars add car instance id: ' + this.instanceId);
    this.cars = this.cars.concat(car);
  }

}
