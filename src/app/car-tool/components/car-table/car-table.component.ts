import { Component, OnInit, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';

import { Car } from '../../../../shared/models/car';
import { LoggerService } from '../../services/logger.service';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarTableComponent implements OnInit, DoCheck {

  constructor(private logger: LoggerService, private carsSvc: CarsService) { }

  ngOnInit() { }

  get cars(): Car[] {
    return this.carsSvc.getAll();
  }

  public ngDoCheck() {
      // console.log('do check: car table component');
  }
}
