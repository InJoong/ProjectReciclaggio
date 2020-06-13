import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteMapComponent } from './components/route-map/route-map.component';
import { AvailableServicesModule } from '../available-services/available-services.module';
import {DriverLayoutComponent} from './components/driver-layout/driver-layout.component';
import { AuthDriverGuard } from 'src/app/guards/auth-driver.guard';

const rutas: Routes = [
  {path: '', component: DriverLayoutComponent, canActivate: [AuthDriverGuard]},
  {path: 'map', component: RouteMapComponent, canActivate: [AuthDriverGuard]},
  {path: 'services', loadChildren: '../../modules/available-services/available-services.module#AvailableServicesModule', canActivate: [AuthDriverGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class DriverRoutingModule {}
