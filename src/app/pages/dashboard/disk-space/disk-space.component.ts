import { Component, OnInit,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'disk-space',
  templateUrl: './disk-space.component.html',
  styleUrls: ['./disk-space.component.scss']
})
export class DiskSpaceComponent implements OnInit {

	@ViewChild('chartPie',{static : true}) chartPie: ElementRef;
  public chartOne : any = [];
  constructor() { }

  ngOnInit() {
    this.chartOne = new Chart(this.chartPie.nativeElement.getContext('2d'), {
		type: 'doughnut',
		data: {
		  labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
		  datasets: [
			{
			  label: "Population (millions)",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [2478,5267,734,784,433]
			}
		  ]
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
