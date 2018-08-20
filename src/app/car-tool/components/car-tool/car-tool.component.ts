import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {FormBuilder, FormGroup} from '@angular/forms';

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
  ];
  public carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      id: [0],
      make: [''],
      model: [''],
      year: [2018],
      color: [''],
      price: [0],
    });
  }

  ngOnInit() {
  }

  addCar() {
    this.cars = [...this.cars, {
      id: this.carForm.value.id,
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      year: this.carForm.value.year,
      color: this.carForm.value.color,
      price: this.carForm.value.price,
    }];
    this.carForm.reset();
  }
}
