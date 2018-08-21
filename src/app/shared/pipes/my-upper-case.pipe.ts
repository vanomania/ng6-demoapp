import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase'
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: any): any {
    return String(value).toUpperCase();
  }

}
