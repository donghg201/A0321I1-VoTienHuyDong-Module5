import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ServiceService} from '../../../service/service.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  public carOfSoXe;
  public carOfId;

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public serviceService: ServiceService
  ) {
  }

  ngOnInit() {
    this.carOfSoXe = this.data.data1.bienSoXe;
    this.carOfId = this.data.data1.id;
  }

  deleteCar() {
    this.serviceService.deleteCar(this.carOfId).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
