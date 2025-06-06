import { Component } from '@angular/core';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  areaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Costs',
        data: [100, 200, 150, 300, 250],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4
      },
      {
        label: 'Growth',
        data: [50, 350, 200, 200, 150],
        fill: true,
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'orange',
        tension: 0.4
      },
      {
        label: 'Earnings',
        data: [70, 300, 250, 250, 200],
        fill: true,
        backgroundColor: '#42A5F5',
        borderColor: 'blue',
        tension: 0.4
      },
    ]
  };

  areaChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
