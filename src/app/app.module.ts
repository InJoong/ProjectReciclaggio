import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DriverHomeModule } from './modules/driver-home/driver-home.module';
import { UserHomeModule } from './modules/user-home/user-home.module';
import { LoginModule } from './modules/login/login.module';
import {AvailableServicesModule} from "./modules/available-services/available-services.module";
import {MapModule} from "./modules/map/map.module";
import {ServiceDetailModule} from "./modules/service-detail/service-detail.module";
import { LayoutFooterComponent } from './main-components/layout-footer/layout-footer.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutFooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    DriverHomeModule,
    UserHomeModule,
    LoginModule,
    AvailableServicesModule,
    MapModule,
    ServiceDetailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
