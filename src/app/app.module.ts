import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailableServicesModule  } from "./modules/available-services/available-services.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AvailableServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
