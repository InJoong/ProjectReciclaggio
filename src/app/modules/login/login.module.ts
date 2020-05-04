import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [SignInComponent],
  exports: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class LoginModule { }
