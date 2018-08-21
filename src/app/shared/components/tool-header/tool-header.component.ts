import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit, DoCheck {

  @Input()
  public headerText = 'Tool Header';

  public someText = '';

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ran change detection');
  }

}
