import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  doughnutChartData = {
    labels: ['BCR', 'ING', 'BT'],
    datasets: [
      {
        label: 'Product Sales',
        data: [350, 450, 100],
        backgroundColor: ['#286DE8', '#F75F00', '#FFDD81']
      }
    ]
  };

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    // cutout: '70%',
    plugins: {
      legend: {
        display: true,
        position: 'top', // Align at bottom
        labels: {
          boxWidth: 20,
          padding: 15,
        }
      }
    },
    layout: {
      padding: 10
    }
  };  
}
