import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading: Boolean;
  constructor() {}

  public show(message = '') {
    this.isLoading = true;
  }

  public hide() {
    this.isLoading = false;
  }
}

