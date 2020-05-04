import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverCardComponent } from './components/driver-card/driver-card.component';
import { DriverRoutingModule } from "./driver-routing.module";
import { RouteMapComponent } from './components/route-map/route-map.component';


@NgModule({
  declarations: [DriverCardComponent, RouteMapComponent],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
