import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'car-tool',
  templateUrl: './car-tool.component.html',
  styleUrls: ['./car-tool.component.css']
})
export class CarToolComponent implements OnInit {

  public cars: Car[] = [];

  public editCarId = -1;

  constructor(private carSvc: CarsService) {
  }

  ngOnInit() {
    this.cars = this.carSvc.all();
  }

  stopEditMode() {
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doDeleteCar(carId: number) {
    this.cars = this.carSvc.deleteCar(carId);
  }

  doCancelCar() {
    this.stopEditMode();
  }

  doSaveCar(car: Car) {
    this.cars = this.carSvc.modifyCar(car);
    this.stopEditMode();
  }

  doAddCar(car: Car) {
    this.cars = this.carSvc.addCar(car);
  }

}
