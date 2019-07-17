import { Component, OnInit,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'chart-common',
  templateUrl: './chart-common.component.html',
  styleUrls: ['./chart-common.component.scss']
})
export class ChartCommonComponent implements OnInit {
  @ViewChild('chart1',{static : true}) chart1: ElementRef;
  @ViewChild('chart2',{static : true}) chart2: ElementRef;
  @ViewChild('chart3',{static : true}) chart3: ElementRef;
  @ViewChild('chart4',{static : true}) chart4: ElementRef;
  public chartOne : any = [];
  public chartTwo : any = [];
  public chartThree : any = [];
  public chartFour : any = [];


  constructor() { }

  ngOnInit() {
    this.chartOne = new Chart(this.chart1.nativeElement.getContext('2d'), {
        type: 'bar',
        
        data: {
            datasets: [{
                label: 'Orders',
                data: [3, 5, 3, 2,6, 5, 7, 2,1,6, 5, 2, 2,6, 5, 1, 2,3,7,0],
                backgroundColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"
                  ]
            }],
            
            labels: ['','','','','','','','','','','','','','','','','','']
        },    
        options : {
            tooltips : {
                callbacks : {
                    labelColor :  function(tooltipItem, chart) {
                        return {
                            borderColor: 'rgb(255, 0, 0)',
                            backgroundColor: '#ffffff'
                        };
                    },
                    labelTextColor: function(tooltipItem, chart) {
                        return '#ffffff';
                    }
                },
                xPadding : 78,
                yPadding  :45,
                bodyFontSize : 56
            },
            responsive: true,
            scales  : {
                xAxes: [{
                    
                    barPercentage: 0.3,
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                    
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
               
                }]
                
            }
        }
    });
    // chart 2
    this.chartTwo = new Chart(this.chart2.nativeElement.getContext('2d'), {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Orders',
                data: [60, 50, 70, 20,60, 50, 70, 20,10,60, 50, 70, 20,60, 50, 70, 20,30,100,0],
                backgroundColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"
                  ]
            }],
            labels: ['','','','','','','','','','','','','','','','','','']
        },    
        options : {
            scales  : {
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                }]
            }
        }
    });
    // chart3
    this.chartThree = new Chart(this.chart3.nativeElement.getContext('2d'), {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Orders',
                data: [60, 50, 70, 20,60, 50, 70, 20,10,60, 50, 70, 20,60, 50, 70, 20,30,100,0],
                backgroundColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"
                  ]
            }],
            labels: ['','','','','','','','','','','','','','','','','','']
        },    
        options : {
            scales  : {
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                }]
            }
        }
    });
    // chart4
    this.chartFour = new Chart(this.chart4.nativeElement.getContext('2d'), {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Orders',
                data: [60, 50, 70, 20,60, 50, 70, 20,10,60, 50, 70, 20,60, 50, 70, 20,30,100,0],
                backgroundColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"
                  ]
                  
            }],
            labels: ['','','','','','','','','','','','','','','','','','']
            
        },    
        options : {
            tooltips : {
                callbacks : {
                    labelColor :  function(tooltipItem, chart) {
                        return {
                            borderColor: 'rgb(255, 0, 0)',
                            backgroundColor: '#ffffff'
                        };
                    },
                    labelTextColor: function(tooltipItem, chart) {
                        return '#ffffff';
                    }
                },
                xPadding : 78,
                yPadding  :45,
                bodyFontSize : 56
            },
            scales  : {
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                        display:false
                    }
                }]
            }
        }
    });
  }
  
    
}
