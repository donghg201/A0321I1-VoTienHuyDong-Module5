import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 10;

  constructor() {
  }

  tangTuoi() {
    this.age++;
  }

  giamTuoi() {
    this.age--;
  }
}
