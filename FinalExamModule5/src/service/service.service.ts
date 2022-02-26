import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private API = 'http://localhost:3000/cars';

  constructor(
    private http: HttpClient
  ) {
  }

  getAllCars(): Observable<any> {
    return this.http.get(this.API);
  }

  getCarById(carId): Observable<any> {
    return this.http.get(this.API + '/' + carId);
  }

  deleteCar(carId): Observable<any> {
    return this.http.delete(this.API + '/' + carId);
  }

  editCar(car, carId): Observable<any> {
    return this.http.put(this.API + '/' + carId, car);
  }
}
