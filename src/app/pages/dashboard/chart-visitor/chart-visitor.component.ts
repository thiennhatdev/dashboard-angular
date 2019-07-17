import { Component, OnInit,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'chart-visitor',
  templateUrl: './chart-visitor.component.html',
  styleUrls: ['./chart-visitor.component.scss']
})
export class ChartVisitorComponent implements OnInit {

  @ViewChild('chartVisitor',{static : true}) chartVisitor: ElementRef;
  public chartOne : any = [];

  constructor() { }

  ngOnInit() {
    this.chartOne = new Chart(this.chartVisitor.nativeElement.getContext('2d'), {
      type: 'line',
      
      data: {
          datasets : [{
            label: "TeamA Score",
            data: [10, 50, 25, 70, 40],
            backgroundColor: "blue",
            borderColor: "lightblue",
            fill: 'start',
            lineTension: 0
          },
          {
            label: "TeamB Score",
            data: [20, 35, 40, 60, 50],
            backgroundColor: "green",
            borderColor: "lightgreen",
            fill: 'start',
            lineTension: 0
          }]
      }
  });
  }

}
