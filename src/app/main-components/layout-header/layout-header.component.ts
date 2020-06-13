import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthDriverService } from 'src/app/services/auth-driver.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit, DoCheck {

  usertype = '';

  constructor(public auth: AuthService, public authdriver: AuthDriverService) {}

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.usertype = localStorage.getItem('userType');
  }


}
