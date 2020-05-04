import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    document.querySelector('body').classList.add('body-login');
    document.querySelector('.header').classList.add('header-login');
  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('body-login');
    document.querySelector('.header').classList.remove('header-login');
  }

}
