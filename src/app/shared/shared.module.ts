import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnorderedListComponent } from './components/unordered-list/unordered-list.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnorderedListComponent, ToolHeaderComponent],
  exports: [UnorderedListComponent, ToolHeaderComponent],
})
export class SharedModule { }
