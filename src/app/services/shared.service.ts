import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  private count = 0;
  private count2 = signal(0);

  getCount() {
    return this.count;
  }

  getCount2() {
    return this.count2();
  }

  incrementCount() {
    this.count = this.count + 1;

    this.count2.update((value) => value + 1)
  }

  decrementCount() {
    this.count = this.count - 1;
  }
}
