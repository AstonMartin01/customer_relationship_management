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

  public barChartType: ChartType = 'bar';
  // public barChartOptions: ChartOptions = { responsive: true };
  // public barChartData: { data: number[]; label: string } [] = [{ data: [], label: 'Values' }];
  public barChartData: any;
  public barChartOptions: any;
  public lineChartData!: ChartConfiguration<'line'>['data'];
  ngOnChanges(): void {
    if (this.data && this.labels && this.title) {
      this.barChartOptions = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      this.barChartData = {
        labels: [...this.labels],
        datasets: [
          {
            label: this.title,
            data: [...this.data],
            // backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            fill: true,
            tension: 0.4
          }
        ]
      };
      
      this.title = this.title || 'Bar Chart';
    }
  }
}
