import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component'
import {UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
