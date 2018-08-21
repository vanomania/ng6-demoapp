import { Injectable } from '@angular/core';
import { Car} from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion', year: 2017, color: 'blue', price: 10000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2016, color: 'red', price: 15000 },
  ];
  constructor() { }

  all() {
    return this.cars;
  }



  addCar(car: Car): Car[] {
    const carToAdd = {
      ...car,
      id: Math.max(...this.cars.map(c => c.id)) + 1,
    };

    this.cars = [ ...this.cars, carToAdd ];
    return this.all();
  }

  deleteCar(carId: number): Car[] {
    this.cars = this.cars.filter(c => c.id !== carId);
    return this.all();
  }

  modifyCar(car: Car) {
    const carIndex = this.cars.findIndex(c => c.id === car.id);
    this.cars = [ ...this.cars.slice(0, carIndex), car, ...this.cars.slice(carIndex + 1) ];
    return this.all();
  }
}
