import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DashboardDataService } from 'src/app/core/services/dashboard-data.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };

  constructor(private dashboardService: DashboardDataService) {
    console.log('ChartComponent loaded');
  }

  ngOnInit() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.barChartData = {
        labels: ['Sold Products', 'Repaired Products', 'Resealed Products', 'Growth Rate'],
        datasets: [
          {
            label: 'CRM Statistics',
            data: [
              data.monthlySoldProducts ?? 0,
              data.monthlyRepairedProducts ?? 0,              
              data.monthlyResealedProducts ?? 0,
              data.growthRate ?? 0
            ], // Normalize revenue
            backgroundColor: ['blue', 'red', 'yellow', 'green'],
            hoverBackgroundColor: ['purple', 'brown', 'orange', '#454B1B'], // Hover colors
            borderColor: 'red'
          }
        ]
      };
    });
  }
}
