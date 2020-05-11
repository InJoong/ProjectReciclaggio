import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from "../../../../data/appointments";

@Component({
  selector: 'app-driver-layout',
  templateUrl: './driver-layout.component.html',
  styleUrls: ['./driver-layout.component.scss']
})
export class DriverLayoutComponent implements OnInit {

  appointments = APPOINTMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
