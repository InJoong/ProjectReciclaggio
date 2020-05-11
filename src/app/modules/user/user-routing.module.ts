import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThridStepComponent } from './components/thrid-step/thrid-step.component';
import { FouthStepComponent } from './components/fouth-step/fouth-step.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

const rutas: Routes = [
  {path: '', component: UserLayoutComponent},
  {path: 'nueva-orden/1', component: FirstStepComponent},
  {path: 'nueva-orden/2', component: SecondStepComponent},
  {path: 'nueva-orden/3', component: ThridStepComponent},
  {path: 'nueva-orden/4', component: FouthStepComponent}
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
