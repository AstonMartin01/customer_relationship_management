import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DashboardDataService } from 'src/app/core/services/dashboard-data.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public pieChartData!: ChartConfiguration<'pie'>['data'];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  constructor(private dashboardService: DashboardDataService) {}

  ngOnInit() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.pieChartData = {
        labels: ['Young People', 'Old People', 'Dead People'],
        datasets: [
          {
            label: 'Users Distribution',
            data: [data.totalUsers, data.activeUsers, data.growthRate * 10],
            backgroundColor: ['orange', 'purple', 'brown'],
            hoverBackgroundColor:  ['yellow', 'blue', 'red'],
            borderColor: 'white',
          }
        ]
      };
    });
  }
}
