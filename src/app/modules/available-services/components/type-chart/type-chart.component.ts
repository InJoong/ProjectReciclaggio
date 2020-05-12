import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { APPOINTMENTS } from '../../../../data/appointments';

@Component({
  selector: 'app-type-chart',
  templateUrl: './type-chart.component.html',
  styleUrls: ['./type-chart.component.scss']
})

export class TypeChartComponent implements OnInit {

  appointments = APPOINTMENTS;
  mueblesCounter: number =
    APPOINTMENTS.filter(appointment => appointment.type === 'Muebles' && appointment.driverId == null).length;
  cascajoCounter: number =
    APPOINTMENTS.filter(appointment => appointment.type === 'Cascajo' && appointment.driverId == null).length;
  electrodomesticosCounter: number =
    APPOINTMENTS.filter(appointment => appointment.type === 'Electrodomesticos' && appointment.driverId == null).length;
  otrosCounter: number =
    APPOINTMENTS.filter(appointment => appointment.type === 'Otros' && appointment.driverId == null).length;



  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Muebles', 'Cascajo', 'Electrodomesticos', 'Otros'];
  public pieChartData: SingleDataSet = [this.mueblesCounter, this.cascajoCounter, this.electrodomesticosCounter, this.otrosCounter];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.appointments.forEach(appointment => {
      if (appointment.type === 'Muebles') {
        this.mueblesCounter++;
      }
      else if (appointment.type === 'Cascajo') {
        this.cascajoCounter++;
      }
      else if (appointment.type === 'Electrodomesticos') {
        this.electrodomesticosCounter++;
      }
      else {
        this.otrosCounter++;
      }
    });
  }

}
