import { Component, OnInit,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'realtime-cost',
  templateUrl: './realtime-cost.component.html',
  styleUrls: ['./realtime-cost.component.scss']
})
export class RealtimeCostComponent implements OnInit {
  
  @ViewChild('chartRealTime',{static : true}) chartRealTime: ElementRef;
  public chartOne : any = [];
  constructor() { }

  ngOnInit() {
    this.chartOne = new Chart(this.chartRealTime.nativeElement.getContext('2d'), {
        type: 'pie',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
  });
  }

}
