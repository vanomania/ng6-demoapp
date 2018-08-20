import { Component, OnInit, Input } from '@angular/core';
import { Car} from '../../models/car';

@Component({
  selector: 'car-table-row',
  templateUrl: './car-table-row.component.html',
  styleUrls: ['./car-table-row.component.css']
})
export class CarTableRowComponent implements OnInit {

  @Input()
  public cars: Car[];

  constructor() { }

  ngOnInit() {
  }

}
