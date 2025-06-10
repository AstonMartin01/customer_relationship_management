import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

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

  public barChartType: ChartType = 'bar';
  // public barChartOptions: ChartOptions = { responsive: true };
  // public barChartData: { data: number[]; label: string } [] = [{ data: [], label: 'Values' }];
  public barChartData: any;
  public barChartOptions: any;

  public lineChartData!: ChartConfiguration<'line'>['data'];
  ngOnChanges(): void {
    this.selectedOrder = "";

    if (this.data && this.labels && this.title) {
      this.updateChart(this.labels, this.data);
      
      this.title = this.title || 'Bar Chart';
    }
  }

  private updateChart(labels: string[], data: number[]): void {
    this.barChartType = this.chartType as ChartType;

    this.barChartOptions = {
      indexAxis: this.chartTypeOrientation,
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true }
      }
    };

    this.barChartData = {
      labels: [...labels],
      datasets: [
        {
          label: this.title,
          data: [...data],
          // backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
          backgroundColor: 'rgba(255, 159, 64, 0.5)',
          fill: true,
          tension: this.chartTension,
          // type: this.chartType,
        }
      ]
    };
  }

  sortData(): void {
    const zipped = this.labels.map((label, i) => ({ label, value: this.data[i] }));

    zipped.sort((a, b) => {
      return this.selectedOrder === 'ascending' ? a.value - b.value : b.value - a.value;
    });

    const sortedLabels = zipped.map(item => item.label);
    const sortedData = zipped.map(item => item.value);

    this.updateChart(sortedLabels, sortedData);
  }
}
