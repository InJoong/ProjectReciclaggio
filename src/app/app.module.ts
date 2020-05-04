import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { AvailableServicesModule} from "./modules/available-services/available-services.module";
import { ServiceDetailModule } from "./modules/service-detail/service-detail.module";
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
    LoginModule,
    AvailableServicesModule,
    ServiceDetailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
