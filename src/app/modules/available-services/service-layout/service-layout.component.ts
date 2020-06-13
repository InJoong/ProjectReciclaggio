import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {AuthDriverService} from "../../../services/auth-driver.service";

@Component({
  selector: 'app-service-layout',
  templateUrl: './service-layout.component.html',
  styleUrls: ['./service-layout.component.scss']
})
export class ServiceLayoutComponent implements OnInit {

  orders;

  constructor(private api: ApiService, private auth: AuthDriverService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.api.getOrders$("/driver/" + "null").subscribe(
      res => this.orders = res
    );
  }

}
