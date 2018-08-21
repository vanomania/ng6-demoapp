import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnorderedListComponent } from './components/unordered-list/unordered-list.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [UnorderedListComponent, ToolHeaderComponent, MyUpperCasePipe],
  exports: [UnorderedListComponent, ToolHeaderComponent, MyUpperCasePipe],
})
export class SharedModule { }
