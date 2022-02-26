import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  public formEditEmployee!: FormGroup;
  public maxDate = new Date();
  public minDate = new Date(1990, 0, 1);
  public employeeOfId;

  constructor(
    public formBuilder: FormBuilder,
    public employeeService: EmployeeService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formEditEmployee = this.formBuilder.group({
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

    this.activeRoute.params.subscribe(data => {
      this.employeeOfId = data.id;
      this.employeeService.getEployeeById(this.employeeOfId).subscribe(data => {
        this.formEditEmployee.patchValue(data);
      });
    });
  }

  editEmployee() {
    this.employeeService.editEmployee(this.formEditEmployee.value, this.employeeOfId).subscribe(data => {
      this.router.navigateByUrl('employee-list');
    });
  }
}
