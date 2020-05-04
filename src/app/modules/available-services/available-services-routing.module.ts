import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceLayoutComponent } from "./service-layout/service-layout.component";
import { ServiceDetailComponent } from "./components/service-detail/service-detail.component";

const rutas : Routes = [
  {path: '', component: ServiceLayoutComponent},
  {path: 'detail', component: ServiceDetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AvailableServicesRoutingModule {}
