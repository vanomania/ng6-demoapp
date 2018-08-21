import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  public buttonText = 'Submit Car';

  @Output()
  public submitCar = new EventEmitter<Car>();

  public carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      make: [''],
      model: [''],
      year: [1900],
      color: [''],
      price: [0],
    });
  }

  ngOnInit() {
  }

  public doSubmitCar() {
    this.submitCar.emit({ ...this.carForm.value });
    this.carForm.reset();
  }

}
