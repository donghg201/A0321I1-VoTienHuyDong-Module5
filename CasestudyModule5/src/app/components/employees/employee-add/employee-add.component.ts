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
  public maxDate = new Date();
  public minDate = new Date(1990,0,1);

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
      identity: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      salary: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]],
      address: ['', Validators.required]
    });
  }

  public addNewEmployee() {
    this.employeeService.addNewEmployee(this.formAddNewEmployee.value).subscribe(data => {
      this.router.navigateByUrl('employee-list');
    });
  }
}
