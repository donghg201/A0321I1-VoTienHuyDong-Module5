import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API = 'http://localhost:3000/employees';

  constructor(
    private http: HttpClient
  ) {
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.API);
  }

  addNewEmployee(employee: any): Observable<any> {
    return this.http.post(this.API, employee);
  }
}
