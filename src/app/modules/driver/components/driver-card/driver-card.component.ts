import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {AuthDriverService} from "../../../../services/auth-driver.service";

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss']
})
export class DriverCardComponent implements OnInit {

  @Input() appointment;

  constructor(private api: ApiService, private auth: AuthDriverService) { }

  ngOnInit(): void {
  }

  putOrders(order_id) {
    let driver_id = this.auth.userProfile$.source['_value'].sub;

    console.log(order_id);
    this.api.putOrders$(order_id, null).subscribe(
      res => console.log(res)
    );
  }

}
