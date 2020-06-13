import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { ApiService } from 'src/app/services/api.service';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-type-chart',
  templateUrl: './type-chart.component.html',
  styleUrls: ['./type-chart.component.scss']
})

export class TypeChartComponent implements OnInit {

  orders;
  mueblesCounter: number = 5;
  cascajoCounter: number = 2;
  electrodomesticosCounter: number = 4;
  otrosCounter: number = 22;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Muebles', 'Cascajo', 'Electrodomesticos', 'Otros'];
  public pieChartData: SingleDataSet = [this.mueblesCounter, this.cascajoCounter, this.electrodomesticosCounter, this.otrosCounter];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private api: ApiService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.getOrders()
  }

  ngOnChange() {
    this.increaseCounters()
  }

  getOrders() {
    this.api.getOrders$("/driver/" + "null").subscribe(
      res => this.orders = res
    );
  }

  increaseCounters() {
    this.orders.forEach(appointment => {
      if (appointment.categoria === 'Muebles') {
        this.mueblesCounter++;
      }
      else if (appointment.categoria === 'Cascajo') {
        this.cascajoCounter++;
      }
      else if (appointment.categoria === 'Electrodomesticos') {
        this.electrodomesticosCounter++;
      }
      else {
        this.otrosCounter++;
      }
    });
  }

}
