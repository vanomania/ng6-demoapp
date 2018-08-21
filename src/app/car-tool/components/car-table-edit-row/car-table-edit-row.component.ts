import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'car-table-edit-row',
  templateUrl: './car-table-edit-row.component.html',
  styleUrls: ['./car-table-edit-row.component.css']
})
export class CarTableEditRowComponent implements OnInit {

  @Input()
  public car: Car;

  constructor() { }

  ngOnInit() {
  }

}
