import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";

@Component({
  selector: 'app-driver-layout',
  templateUrl: './driver-layout.component.html',
  styleUrls: ['./driver-layout.component.scss']
})
export class DriverLayoutComponent implements OnInit {

  orders;

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.getOrders().subscribe((data: {}) => {
      this.orders = data;
      console.log("Respuesta => : " + this.orders)
    });
  }

}
