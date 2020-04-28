import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { LayoutFooterComponent } from './main-components/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './main-components/layout-header/layout-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
