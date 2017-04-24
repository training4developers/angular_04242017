import { Component, OnInit, NgZone } from '@angular/core';

import { Car } from '../shared/models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app works!';

  public cars: Car[] = [
    { make: 'Toyota1', model: 'Yaris', year: 2007, color: 'blue', price: 5000 },
    { make: 'Ford', model: 'Fusion', year: 2010, color: 'black', price: 15000 },
  ];

  constructor(private ngZone: NgZone) {}

  public addCar(newCar) {
      console.log('new car added');
      this.cars = this.cars.concat(newCar);
  }

  ngOnInit() {

      this.ngZone.runOutsideAngular(() => {

        setTimeout(() => {

            // this.cars = this.cars.concat({
            //     make: 'Mini',
            //     model: 'Hard Top S',
            //     year: 2016,
            //     color: 'black',
            //     price: 20000,
            // } as Car);

            // console.log('timeout expired', this.cars);

            // let car: Car = {
            //     make: 'Mini',
            //     model: 'Soft Top Slow Base',
            //     year: 2010,
            //     color: 'burgundy',
            //     price: 13000,
            // };

            // car = Object.assign({}, car, { price: 12000 });

        }, 3000);
      });


  }

}
