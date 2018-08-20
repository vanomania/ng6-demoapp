import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unordered-list-component',
  templateUrl: './unordered-list-component.component.html',
  styleUrls: ['./unordered-list-component.component.css']
})
export class UnorderedListComponentComponent implements OnInit {

  @Input()
  public items: string[];

  constructor() { }

  ngOnInit() {
  }

}
