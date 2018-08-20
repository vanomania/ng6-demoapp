import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorToolComponent } from './components/color-tool/color-tool.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  declarations: [ColorToolComponent],
  exports: [ColorToolComponent],
})
export class ColorToolModule { }
