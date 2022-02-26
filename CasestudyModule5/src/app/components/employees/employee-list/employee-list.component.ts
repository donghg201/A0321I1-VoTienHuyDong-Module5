import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from './../../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeDeleteDialogComponent} from '../employee-delete-dialog/employee-delete-dialog.component';

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
    public employeeService: EmployeeService,
    public router: Router,
    public dialog: MatDialog
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

  openDialog(id): void {
    this.employeeService.getEployeeById(id).subscribe(dataOfEmployee => {
      const dialogRef = this.dialog.open(EmployeeDeleteDialogComponent, {
        width: '500px',
        data: {data1: dataOfEmployee},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

}
