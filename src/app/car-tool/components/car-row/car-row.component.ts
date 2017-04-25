import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { Car } from '../../../../shared/models/car';
import { LoggerService } from '../../services/logger.service';

const customLogger = {
  log(msg) {
    console.log('custom logger: ' + msg);
  }
};

const createLogger = () => {
  console.log('called logger factory');
  return new LoggerService();
};

@Component({
  selector: 'tr[car]',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.css'],
  providers: [
    // { provide: LoggerService, useValue: customLogger },
    { provide: LoggerService, useFactory: createLogger },
  ]
})
export class CarRowComponent implements OnInit, DoCheck {

  @Input()
  public car: Car;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    // this.logger.log('car row');
  }

  public ngDoCheck() {
    // console.log('do check: car row');
  }

}
