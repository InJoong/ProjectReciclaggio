import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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

  toggle(){
    this.isSelected = !this.isSelected;
  }

}
