import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fouth-step',
  templateUrl: './fouth-step.component.html',
  styleUrls: ['./fouth-step.component.scss']
})
export class FouthStepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    this.router.navigateByUrl('/user');
  }

}
