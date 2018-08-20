import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { UnorderedListComponentComponent } from './components/unordered-list-component/unordered-list-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolHeaderComponent, UnorderedListComponentComponent],
  exports: [ToolHeaderComponent, UnorderedListComponentComponent],
})
export class SharedModule { }
