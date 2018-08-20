import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-color-tool',
  templateUrl: './color-tool.component.html',
  styleUrls: ['./color-tool.component.css']
})
export class ColorToolComponent implements OnInit {

  public headerText = 'Color Tool';
  public colors = ['red', 'blue', 'green'];
  public colorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.colorForm = this.fb.group({color: ['']});
  }

  ngOnInit() {
  }

  addColor() {
    this.colors = this.colors.concat(this.colorForm.value.color);
    this.colorForm.reset();
  }
}
