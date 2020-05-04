import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./main-components/page-not-found/page-not-found.component";

import { SignInComponent } from "./modules/login/components/sign-in/sign-in.component";

const rutas : Routes = [
  {path: '', component: SignInComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
