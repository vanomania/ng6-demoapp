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

  @Input()
  public editCarId: number;

  @Output()
  public deleteCar = new EventEmitter<number>();


  @Output()
  public editCar = new EventEmitter<number>();

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

  doToggleEdit(carId: number) {
    this.editCar.emit(carId);
  }

  constructor() { }

  ngOnInit() {
  }

}
