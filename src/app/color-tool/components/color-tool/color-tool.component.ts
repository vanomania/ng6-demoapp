import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-tool',
  templateUrl: './color-tool.component.html',
  styleUrls: ['./color-tool.component.css'],
})
export class ColorToolComponent implements OnInit {

  public headerText = 'Color Tool';
  public colors = [ 'red', 'green', 'blue' ];

  // private fb: FormBuilder;
  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor() {

  }

  ngOnInit() {
  }

  addColor(color: string) {
    this.colors = this.colors.concat(color);

    // this.colors = this.colors.concat(this.colorForm.value.colorInput);
    // this.colors = [ ...this.colors, this.colorForm.value.colorInput ];
    // do not like this because I don't like mutating
    // this.colors.push(this.colorForm.value.colorInput);
    // this.colorForm.reset();
  }

}
