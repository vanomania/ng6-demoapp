import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-tool',
  templateUrl: './car-tool.component.html',
  styleUrls: ['./car-tool.component.css']
})
export class CarToolComponent implements OnInit {

  public headerText = 'Car Tool';
  public cars: Car[] = [
    {
      id: 0,
      make: 'Honda',
      model: 'Accord',
      year: 2003,
      color: 'blue',
      price: 5000
    },
    {
      id: 1,
      make: 'Lamborghini',
      model: 'Aventador',
      year: 2018,
      color: 'red',
      price: 120000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
