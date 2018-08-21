import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ColorsService} from '../../services/colors.service';
@Component({
  selector: 'color-tool',
  templateUrl: './color-tool.component.html',
  styleUrls: ['./color-tool.component.css'],
})
export class ColorToolComponent implements OnInit {

  public headerText = 'Color Tool';
  public colors = [];

  // private fb: FormBuilder;
  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  public ellipsisDemoForm: FormGroup;

  constructor(private colorSvc: ColorsService) {

  }

  ngOnInit() {
    this.colors = this.colorSvc.all();
  }

  addColor(color: string) {
    this.colors = this.colors.concat(color);
  }

}
