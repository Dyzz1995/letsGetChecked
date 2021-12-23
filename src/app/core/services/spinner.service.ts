import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private _loading = new BehaviorSubject<boolean>(false);
  private counter: number = 0;

  constructor() {}

  get isLoading$() {
    return this._loading.asObservable();
  }

  show() {
    if (this.counter === 0) {
      this._loading.next(true);
    }

    this.counter++;
  }

  hide() {
    this.counter--;

    if (this.counter === 0) {
      this._loading.next(false);
    }
  }
}
