import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverCardComponent } from "./driver-card/driver-card.component";

const rutas : Routes = [
  {path: 'card', component: DriverCardComponent}
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class DriverRoutingModule {}
