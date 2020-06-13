import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-driver-layout',
  templateUrl: './driver-layout.component.html',
  styleUrls: ['./driver-layout.component.scss']
})
export class DriverLayoutComponent implements OnInit {

  orders;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.api.getOrders$().subscribe(
      res => this.orders = res
    );
  }

}
