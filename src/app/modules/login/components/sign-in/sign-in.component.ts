import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  trigger,
  state,
  style
} from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import { AuthDriverService } from 'src/app/services/auth-driver.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [
    trigger('textFieldSelected', [
      state('onSelect', style({
        background: 'blue'
      })),
      state('offSelect', style({
        background: 'white'
      }))
    ])
  ]
})
export class SignInComponent implements OnInit, AfterViewInit, OnDestroy {
  isSelected = false;

  constructor(private router: Router, public auth: AuthService, public authdriver: AuthDriverService, private api: ApiService) { 
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    document.querySelector('body').classList.add('body-login');
    document.querySelector('.header').classList.add('header-login');
  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('body-login');
    document.querySelector('.header').classList.remove('header-login');
    if(this.auth.loggedIn){
      var user = {
        _id: this.auth.userProfile$.source['_value'].sub,
        name: this.auth.userProfile$.source['_value'].name,
        email: this.auth.userProfile$.source['_value'].email,
        role: "User"
      }
      this.api.createUser$(user).subscribe(res => {});
    }

    if(this.authdriver.loggedIn){
      var user = {
        _id: this.authdriver.userProfile$.source['_value'].sub,
        name: this.authdriver.userProfile$.source['_value'].name,
        email: this.authdriver.userProfile$.source['_value'].email,
        role: "Driver"
      }
      this.api.createUser$(user).subscribe(res => {});
    }
  }

  toggle(){
    this.isSelected = !this.isSelected;
  }

  loginUser() {
    localStorage.setItem('userType', 'user');
    this.router.navigateByUrl('/user');
  }

  loginDriver() {
    localStorage.setItem('userType', 'driver');
    this.router.navigateByUrl('/driver');
  }

}
