import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverCardComponent } from './components/driver-card/driver-card.component';
import { DriverRoutingModule } from './driver-routing.module';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { DriverLayoutComponent } from './components/driver-layout/driver-layout.component';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [DriverCardComponent, RouteMapComponent, DriverLayoutComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    HttpClientModule
  ]
})
export class DriverModule { }
