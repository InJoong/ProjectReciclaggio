import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { SignInComponent } from './modules/login/components/sign-in/sign-in.component';
import { DriverModule } from './modules/driver/driver.module';
import { UserModule } from './modules/user/user.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthDriverGuard } from './guards/auth-driver.guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

const rutas: Routes = [
  {path: '', component: SignInComponent},
  {path: 'driver', loadChildren: './modules/driver/driver.module#DriverModule', canActivate: [AuthDriverGuard]},
  {path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas, {enableTracing: true})],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
