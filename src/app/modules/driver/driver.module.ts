import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { DriverRoutingModule } from "./driver-routing.module";


@NgModule({
  declarations: [DriverCardComponent],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
