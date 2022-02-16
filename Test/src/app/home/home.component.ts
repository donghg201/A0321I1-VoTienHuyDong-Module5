import {Component, OnInit} from '@angular/core';
import {CommonService} from "../Services/common.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name = "Huy";
  public age = 18;
  public jobs = ["doctor", "engineer", "teacher", "nurse"];

  constructor() {
  }

  ngOnInit(): void {
  }

  tangTuoi() {
    this.age++;
    // if (this.age === 20) {
    //   this.name = "David"
    // }
    // this.jobs.push(this.name + this.age);
  }

  giamTuoi() {
    this.age--;
    // if (this.age <= 20) {
    //   this.name = "Huy Đông";
    // }
  }
}
