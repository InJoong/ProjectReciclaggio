import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DriverHomeModule } from './modules/driver-home/driver-home.module';
import { UserHomeModule } from './modules/user-home/user-home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DriverHomeModule,
    UserHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
