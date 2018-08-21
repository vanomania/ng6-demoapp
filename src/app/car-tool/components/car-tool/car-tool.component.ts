import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-tool',
  templateUrl: './car-tool.component.html',
  styleUrls: ['./car-tool.component.css']
})
export class CarToolComponent implements OnInit {

  public cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion', year: 2017, color: 'blue', price: 10000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2016, color: 'red', price: 15000 },
  ];

  public editCarId = -1;

  constructor() {
  }

  ngOnInit() {
  }

  doAddCar(car: Car) {

    const carToAdd = {
      ...car,
      id: Math.max(...this.cars.map(c => c.id)) + 1,
    };

    this.cars = [ ...this.cars, carToAdd ];
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(car => {
      return car.id !== carId;
    });
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelEdit() {
    this.editCarId = -1;
  }
}
