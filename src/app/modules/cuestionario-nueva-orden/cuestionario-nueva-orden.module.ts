import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { ThridStepComponent } from './components/thrid-step/thrid-step.component';
import { FouthStepComponent } from './components/fouth-step/fouth-step.component';



@NgModule({
  declarations: [SecondStepComponent, FirstStepComponent, ThridStepComponent, FouthStepComponent],
  imports: [
    CommonModule
  ]
})
export class CuestionarioNuevaOrdenModule { }
