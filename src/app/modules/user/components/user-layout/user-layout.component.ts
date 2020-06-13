import { Component, OnInit } from '@angular/core';
import { APPOINTMENTS } from '../../../../data/appointments';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  orders;

  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.userProfile$.source['_value'].sub);
  }

  getOrders() {
    this.api.getOrders$("/client/:").subscribe(
      res => this.orders = res
    );
  }
}
