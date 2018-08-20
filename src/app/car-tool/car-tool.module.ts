import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolComponent } from './components/car-tool/car-tool.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  declarations: [CarToolComponent],
  exports: [CarToolComponent],
})
export class CarToolModule { }
