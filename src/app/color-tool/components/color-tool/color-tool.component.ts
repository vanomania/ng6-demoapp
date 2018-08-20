import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-tool',
  templateUrl: './color-tool.component.html',
  styleUrls: ['./color-tool.component.css']
})
export class ColorToolComponent implements OnInit {
  public headerText = 'Color Tool'
  public colors = ['red', 'blue', 'green'];


  constructor() {}

  ngOnInit() {
  }

  addColor(color: string) {
    this.colors = this.colors.concat(color);
  }
}
