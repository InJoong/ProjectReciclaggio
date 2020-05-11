import { Component, OnInit } from '@angular/core';
import { APPOINTMENTUSER } from '../../../../data/appointments'

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  appointments = APPOINTMENTUSER;

  constructor() { }

  ngOnInit(): void {
  }

}