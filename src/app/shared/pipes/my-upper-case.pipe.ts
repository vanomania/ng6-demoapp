import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
  pure: true,
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: any): any {
    console.log('transform my uppercase pipe');
    return String(value).toUpperCase();
  }

}
