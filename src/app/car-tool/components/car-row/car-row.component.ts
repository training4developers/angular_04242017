import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { Car } from '../../../../shared/models/car';

@Component({
  selector: 'tr[car]',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.css']
})
export class CarRowComponent implements OnInit, DoCheck {

  @Input()
  public car: Car;

  constructor() { }

  ngOnInit() {
  }

  public ngDoCheck() {
      console.log('do check: car row');
  }

}
