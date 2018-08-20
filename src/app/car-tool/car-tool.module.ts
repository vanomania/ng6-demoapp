import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolComponent } from './components/car-tool/car-tool.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarToolComponent],
  exports: [CarToolComponent],
})
export class CarToolModule { }
