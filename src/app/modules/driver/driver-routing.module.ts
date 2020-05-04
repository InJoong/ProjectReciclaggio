import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverCardComponent } from "./components/driver-card/driver-card.component";
import { RouteMapComponent } from "./components/route-map/route-map.component";
import { AvailableServicesModule } from "../available-services/available-services.module";

const rutas : Routes = [
  {path: '', component: DriverCardComponent},
  {path: 'map', component: RouteMapComponent},
  {path: 'services', loadChildren: '../../modules/available-services/available-services.module#AvailableServicesModule'}
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class DriverRoutingModule {}
