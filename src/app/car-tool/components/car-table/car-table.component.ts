import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  public cars: Car[] = [];

  @Output()
  public deleteCar = new EventEmitter<number>();

  doDeleteCar(carId) {
    this.deleteCar.emit(carId);
  }

  constructor() { }

  ngOnInit() {
  }

}
