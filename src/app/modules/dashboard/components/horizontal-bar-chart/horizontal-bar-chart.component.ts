import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent {
  chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Earnings',
        data: [120, 190, 30, 50],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC']
      }
    ]
  };

  chartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };
}
