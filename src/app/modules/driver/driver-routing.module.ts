import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteMapComponent } from "./components/route-map/route-map.component";
import { AvailableServicesModule } from "../available-services/available-services.module";
import {DriverLayoutComponent} from "./driver-layout/driver-layout.component";

const rutas : Routes = [
  {path: '', component: DriverLayoutComponent},
  {path: 'map', component: RouteMapComponent},
  {path: 'services', loadChildren: '../../modules/available-services/available-services.module#AvailableServicesModule'}
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class DriverRoutingModule {}
