import { Component, OnInit } from '@angular/core';
import {APPOINTMENTS} from '../../../../data/appointments';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  currentId = this.route.snapshot.params.id;
  appointment = APPOINTMENTS.filter(appointment => appointment.id.toString() === this.currentId)[0];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }
}
