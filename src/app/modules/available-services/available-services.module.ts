import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceLayoutComponent } from './service-layout/service-layout.component';
import { FilterCardComponent } from './filter-card/filter-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';



@NgModule({
    declarations: [ServiceLayoutComponent, FilterCardComponent, ServiceCardComponent],
  exports: [
    FilterCardComponent,
    ServiceLayoutComponent
  ],
    imports: [
        CommonModule
    ]
})
export class AvailableServicesModule { }
