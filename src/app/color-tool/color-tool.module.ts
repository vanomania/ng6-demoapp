import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorToolComponent } from './components/color-tool/color-tool.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  declarations: [ColorToolComponent],
  exports: [ColorToolComponent],
})
export class ColorToolModule { }
