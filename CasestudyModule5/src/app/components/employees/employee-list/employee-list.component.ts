import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from './../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: any;
  term!: string;
  p = 1;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    }, error => {
      console.log('Lay danh sach nhan vien that bai');
    });
  }
}
