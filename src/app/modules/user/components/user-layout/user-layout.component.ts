import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from '../../../../data/appointments';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  appointments = APPOINTMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
