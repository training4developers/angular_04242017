import { Component, OnInit, Input, DoCheck, Optional, Host } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Car } from '../../../../shared/models/car';
import { LoggerService } from '../../services/logger.service';

const customLogger = {
  log(msg) {
    console.log('custom logger: ' + msg);
  }
};

const createLogger = function(...params) {
  console.log('called logger factory');
  console.log(params);
  return new LoggerService();
};

@Component({
  selector: 'tr[car]',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.css'],
  providers: [
    // { provide: LoggerService, useValue: customLogger },
    // { provide: LoggerService, useFactory: createLogger },
  ]
})
export class CarRowComponent implements OnInit, DoCheck {

  @Input()
  public car: Car;

  constructor(private logger: LoggerService, @Optional() private theForm: NgForm) { }

  ngOnInit() {
    // this.logger.log('car row');
    console.log('the form');
    console.log(this.theForm);
  }

  public ngDoCheck() {
    // console.log('do check: car row');
  }

}
