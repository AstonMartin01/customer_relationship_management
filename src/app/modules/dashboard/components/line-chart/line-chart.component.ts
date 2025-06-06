import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DashboardDataService } from 'src/app/core/services/dashboard-data.service';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };

  constructor(private dashboardService: DashboardDataService) {}

  ngOnInit() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.lineChartData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Revenue',
            data: [data.revenue * 0.3, data.revenue * 0.8, data.revenue * 0.7, data.revenue], // Simulated growth
            borderColor: 'grey',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            fill: true,
          }
        ],
      };
    });
  }
}
