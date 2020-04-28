import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import {AvailableServicesModule} from "./modules/available-services/available-services.module";
import {MapModule} from "./modules/map/map.module";
import {ServiceDetailModule} from "./modules/service-detail/service-detail.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AvailableServicesModule,
    MapModule,
    ServiceDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
