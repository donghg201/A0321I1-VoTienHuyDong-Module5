import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees: any;
  term!: string;
  p: number = 1;

  constructor(
    public employeeService: EmployeeService, private Router: Router
  ) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    }, error => {
      console.log("Lay danh sach nhan vien that bai");
    })
  }
}
