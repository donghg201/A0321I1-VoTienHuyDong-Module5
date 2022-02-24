import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  public formAddNewEmployee!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.formAddNewEmployee = this.formBuilder.group({
      fullName: ['', Validators.required],
      position: ['', Validators.required],
      level: ['', Validators.required],
      part: ['', Validators.required],
      dob: ['', Validators.required],
      identity: ['', Validators.required],
      salary: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  public addNewEmployee() {
    console.log(this.formAddNewEmployee);
  }
}
