import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from '../../../data/appointments';

@Component({
  selector: 'app-service-layout',
  templateUrl: './service-layout.component.html',
  styleUrls: ['./service-layout.component.scss']
})
export class ServiceLayoutComponent implements OnInit {

  appointments = APPOINTMENTS.filter(appointment => {
    return appointment.driverId === null;
  } );

  constructor() { }

  ngOnInit(): void {
  }

}
