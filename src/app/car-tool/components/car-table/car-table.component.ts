import { Component, OnInit, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';

import { Car } from '../../../../shared/models/car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarTableComponent implements OnInit, DoCheck {

  @Input()
  public cars: Car[];

  constructor() { }

  ngOnInit() {
  }

  public ngDoCheck() {
      console.log('do check: car table component');
  }
}
