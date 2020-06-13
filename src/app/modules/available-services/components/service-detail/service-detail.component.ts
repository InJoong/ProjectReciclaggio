import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {AuthDriverService} from "../../../../services/auth-driver.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  currentId = this.route.snapshot.params.id;
  appointment;

  constructor(private route: ActivatedRoute, private api: ApiService, private auth: AuthDriverService) {}

  ngOnInit() {
    this.getOrderById();
  }

  ngOnChange() {
    this.getOrderById();
  }

  acceptOrder() {
    this.api.putOrders$(this.currentId, this.auth.userProfile$.source['_value'].sub).subscribe(
      res => console.log(res)
    )
  }

  getOrderById() {
    this.api.getOrderById$(this.currentId).subscribe(
      res => this.appointment = res
    );
  }
}
