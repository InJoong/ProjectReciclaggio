import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceLayoutComponent } from './service-layout/service-layout.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { AvailableServicesRoutingModule } from "./available-services-routing.module";

@NgModule({
  declarations: [ServiceLayoutComponent, FilterCardComponent, ServiceCardComponent, ServiceDetailComponent],
  imports: [
    CommonModule,
    AvailableServicesRoutingModule
  ]
})
export class AvailableServicesModule { }
