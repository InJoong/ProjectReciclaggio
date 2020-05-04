import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';

const rutas : Routes = [
  {path: 'card', component: UserCardComponent}
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
