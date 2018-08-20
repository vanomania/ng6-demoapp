import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  @Input()
  public buttonText = 'Submit Form';

  @Output()
  public submitColor = new EventEmitter<string>();

  public colorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.colorForm = this.fb.group({color: ['']});
  }

  ngOnInit() {
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value.color);
    this.colorForm.reset();
  }
}
