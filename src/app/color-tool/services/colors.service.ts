import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private colors = [ 'red', 'green', 'blue' ];
  constructor() { }

  all() {
    return this.colors;
  }
}
