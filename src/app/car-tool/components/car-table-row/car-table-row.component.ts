import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'tr.car-table-row',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.css']
})
export class CarTableRowComponent implements OnInit {

  @Input()
  public car: Car;

  @Input()
  public editCarId: number;

  @Output()
  public deleteCar = new EventEmitter<number>();

  @Output()
  public editCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public doDeleteCar() {
    this.deleteCar.emit(this.car.id);
  }

  public doToggleEditCar() {
    this.editCar.emit(this.car.id);
  }
}
