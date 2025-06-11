import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, ChartType, Ticks } from 'chart.js';

@Component({
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.css']
})
export class BarChart2Component implements OnChanges {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() title: string = "";
  @Input() chartType: string = "bar";
  @Input() chartTypeOrientation: string = "x"; 
  @Input() chartTension: number = 0;
  public selectedOrder: string = "";
  public barChartFirstColor: string = "";
  public barChartSecondColor: string = "";
  public isDisplayedXGridLines: boolean = false;
  public isDisplayedYGridLines: boolean = false;

  public barChartType: ChartType = "bar";
  public barChartData: any;
  public barChartOptions: any;

  ngOnChanges(): void {
    this.selectedOrder = "";

    if (this.data && this.labels && this.title) {
      this.updateChart(this.labels, this.data);
      
      this.title = this.title || "Bar Chart";
    }
  }

  private updateChart(labels: string[], data: any[]): void {
    this.stylingChart();

    this.barChartType = this.chartType as ChartType;

    this.barChartOptions = {
      indexAxis: this.chartTypeOrientation,

      plugins: {
        legend: {
          labels: {
            padding: 20,
            color: "green",            
            font: {
              size: 26,
              weight: "bold",
            },
            // usePointStyle: true,
          }
        },
        // tooltip: {
        //   callbacks: {
        //     label: function(context: any) {
        //       return `${context.raw} $`;
        //     }
        //   }
        // }
      },        

      scales: {
        x: { 
          beginAtZero: true, 
          grid: {
            display: this.isDisplayedXGridLines,
            color: "dodgerblue"
          },          
          ticks: {
            // callback: function(value: any) {
            //   return `${value} $`;
            // },
            padding: 10,
            color: this.barChartSecondColor,            
            font: {
              size: 16,
              weight: "bold",
            },
          }
        },
        y: { 
          beginAtZero: true,
          grid: {
            display: this.isDisplayedYGridLines,
            color: "dodgerblue"
          },
          ticks: {
            padding: 10,
            color: this.barChartFirstColor,
            font: {
              size: 16,
              weight: "bold",              
            }
          }
        }
      },
    };

    this.barChartData = {
      labels: [...labels],
      datasets: [
        {
          label: this.title,
          data: [...data],
          // backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726", "#AB47BC"],
          backgroundColor: "goldenrod", //"rgb(218, 165, 32, 0.7)"
          hoverBackgroundColor: ["cornflowerblue"],
          fill: true,
          tension: this.chartTension,
          // type: this.chartType,
        }
      ],
    };
  }

  sortData(): void {
    const zipped = this.labels.map((label, i) => ({ label, value: this.data[i] }));

    zipped.sort((a, b) => {
      return this.selectedOrder === "ascending" ? a.value - b.value : b.value - a.value;
    });

    const sortedLabels = zipped.map(item => item.label);
    const sortedData = zipped.map(item => item.value);

    this.updateChart(sortedLabels, sortedData);
  }

  private stylingChart(): void {
    this.stylingChartBorder();
    this.stylingChartByOrientationAxis();
  }

  private stylingChartBorder(): void {
    Chart.register({
      id: "chartAreaBorder",
      beforeDraw(chart) {
        const { ctx, chartArea: area } = chart;
        ctx.save();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 0]);
        ctx.lineDashOffset = 2;
        ctx.strokeRect(area.left, area.top, area.right - area.left, area.bottom - area.top);
        ctx.restore();
      }
    });
  }

  private stylingChartByOrientationAxis(): void {
    if (this.chartTypeOrientation === "y") {
      this.barChartFirstColor = "dodgerblue";
      this.barChartSecondColor = "crimson";
      this.isDisplayedXGridLines = true;
      this.isDisplayedYGridLines = false;      
    }
    else {
      this.barChartFirstColor = "crimson";
      this.barChartSecondColor = "dodgerblue";
      this.isDisplayedYGridLines = true;
      this.isDisplayedXGridLines = false;
    }
  }
}
