import {Component, OnInit} from '@angular/core';
import {ServiceService} from './../../../service/service.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public cars: any;
  term!: string;
  p = 1;

  constructor(
    public serviceService: ServiceService,
    public router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.serviceService.getAllCars().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    }, error => {
      console.log('Lay danh sach xe that bai');
    });
  }

  openDialog(id): void {
    this.serviceService.getCarById(id).subscribe(dataOfCar => {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '500px',
        data: {data1: dataOfCar},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }

}
