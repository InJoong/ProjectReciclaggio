import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component'
import {UserRoutingModule } from './user-routing.module';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThridStepComponent } from './components/thrid-step/thrid-step.component';
import { FouthStepComponent } from './components/fouth-step/fouth-step.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

@NgModule({
  declarations: [
    UserCardComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThridStepComponent,
    FouthStepComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
