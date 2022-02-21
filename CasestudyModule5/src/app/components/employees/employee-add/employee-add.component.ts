import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})

export class EmployeeAddComponent implements OnInit {
  public formAddNewEmployee!: FormGroup

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formAddNewEmployee = this.formBuilder.group({
      fullName: [''],
      position: [''],
      level: [''],
      part: [''],
      dob: [''],
      identity: [''],
      salary: [''],
      email: [''],
      phoneNumber: [''],
      address: ['']
    })
  }

  addNewEmployee(){
    console.log(this.formAddNewEmployee.value);
  }
}
