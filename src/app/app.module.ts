import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { AvailableServicesModule} from './modules/available-services/available-services.module';
import { ServiceDetailModule } from './modules/service-detail/service-detail.module';
import { LayoutFooterComponent } from './main-components/layout-footer/layout-footer.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import {LayoutHeaderComponent} from './main-components/layout-header/layout-header.component';

import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';
import localeUs from '@angular/common/locales/en';
import localeKo from '@angular/common/locales/ko';

registerLocaleData(localeMx, 'es');
registerLocaleData(localeUs, 'en');
registerLocaleData(localeKo, 'ko');

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AvailableServicesModule,
    ServiceDetailModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
