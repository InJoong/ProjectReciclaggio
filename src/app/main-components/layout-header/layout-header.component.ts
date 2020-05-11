import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit, DoCheck {

  usertype = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.usertype = localStorage.getItem('userType');
  }


}
