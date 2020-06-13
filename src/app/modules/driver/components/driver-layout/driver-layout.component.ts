import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-driver-layout',
  templateUrl: './driver-layout.component.html',
  styleUrls: ['./driver-layout.component.scss']
})
export class DriverLayoutComponent implements OnInit {

  orders;

  constructor(public ordersService: OrdersService, private api: ApiService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.api.ping$().subscribe(
      res => this.orders = res
    );
  }

}
