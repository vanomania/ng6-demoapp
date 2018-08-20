import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolComponent } from './components/car-tool/car-tool.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  declarations: [CarToolComponent],
  exports: [CarToolComponent],
})
export class CarToolModule { }
