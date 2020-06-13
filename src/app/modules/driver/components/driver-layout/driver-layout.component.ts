import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {AuthDriverService} from "../../../../services/auth-driver.service";

@Component({
  selector: 'app-driver-layout',
  templateUrl: './driver-layout.component.html',
  styleUrls: ['./driver-layout.component.scss']
})
export class DriverLayoutComponent implements OnInit {

  orders;

  constructor(private api: ApiService, private auth: AuthDriverService) { }

  ngOnInit(): void {
    this.getOrders();
    console.log(this.auth.userProfile$);
  }

  ngOnChanges(): void {
    this.getOrders();
  }

  getOrders() {
    let driver_id = this.auth.userProfile$.source['_value'].sub;
    this.api.getOrders$("/driver/" + driver_id).subscribe(
      res => this.orders = res
    );

  }

}
