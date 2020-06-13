import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthDriverService } from 'src/app/services/auth-driver.service';

@Component({
  selector: 'app-driver-layout',
  templateUrl: './driver-layout.component.html',
  styleUrls: ['./driver-layout.component.scss']
})
export class DriverLayoutComponent implements OnInit {

  orders;

  constructor(private api: ApiService, private authdriver: AuthDriverService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.api.getOrders$("/driver/"+this.authdriver.userProfile$.source['_value'].sub).subscribe(
      res => this.orders = res
    );
  }

}
