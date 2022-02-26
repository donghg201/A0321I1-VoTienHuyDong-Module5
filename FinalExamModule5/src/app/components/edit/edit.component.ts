import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public formXe!: FormGroup;
  // public maxHour = new;
  // public minHour = new Date(1990, 0, 1);
  public carOfId;

  constructor(
    public formBuilder: FormBuilder,
    public serviceService: ServiceService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.formXe = this.formBuilder.group({
      bienSoXe: [{value: ''}, Validators.required],
      loaiXe: ['', Validators.required],
      tenNhaXe: ['', Validators.required],
      diemDi: ['', Validators.required],
      diemDen: ['', Validators.required],
      soDienThoai: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gioDi: ['', [Validators.required]],
      gioDen: ['', [Validators.required]]
    });

    this.activeRoute.params.subscribe(data => {
      this.carOfId = data.id;
      this.serviceService.getCarById(this.carOfId).subscribe(data => {
        this.formXe.patchValue(data);
      });
    });
  }

  editCar() {
    this.serviceService.editCar(this.formXe.value, this.carOfId).subscribe(data => {
      this.router.navigateByUrl('list').then(r => {
          console.log(r);
        },
        err => {
          console.log(err);
        });
    });
  }
}
