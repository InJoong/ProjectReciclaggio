import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThridStepComponent } from './components/thrid-step/thrid-step.component';
import { FouthStepComponent } from './components/fouth-step/fouth-step.component';

const rutas: Routes = [
  {path: '', component: UserCardComponent},
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
