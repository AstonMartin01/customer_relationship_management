import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardDataService } from 'src/app/core/services/dashboard-data.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: any;
  barChartData: any;
  barChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  sortDirection = 'asc';
  buttonText = ''; // Sortează
  data: { label: string, value: number }[] = [];

  constructor(private dashboardService: DashboardDataService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.data = [
        { label: 'Sold Items', value: data.monthlySoldProducts ?? 0 },
        { label: 'Repaired Items', value: data.monthlyRepairedProducts ?? 0 },
        { label: 'Resealed Items', value: data.monthlyResealedProducts ?? 0 },
        { label: 'Growth Rate', value: data.growthRate ?? 0 }
      ];

      this.updateChartData();
      this.createChart();
    });
  }

  toggleSort() {
    if (this.sortDirection === 'asc') {
      this.data.sort((a, b) => b.value - a.value);
      this.sortDirection = 'desc';
      this.buttonText = ''; // Sorteaza invers
    } else {
      this.data.sort((a, b) => a.value - b.value);
      this.sortDirection = 'asc';
      this.buttonText = ''; // Sorteaza invers
    }

    this.updateChartData();
    this.updateChart();
  }

  updateChartData() {
    this.barChartData = {
      labels: this.data.map(item => item.label),
      datasets: [{
        label: 'CRM Statistics',
        data: this.data.map(item => item.value),
        backgroundColor: ['blue', 'red', 'yellow', 'green'],
        hoverBackgroundColor: ['purple', 'brown', 'orange', '#454B1B'],
        borderColor: 'red'
      }]
    };
  }

  createChart() {
    setTimeout(() => {
      const canvas = document.getElementById('barChart') as HTMLCanvasElement;
      if (!canvas) {
        console.error("Canvas not found!");
        return;
      }

      this.chart = new Chart(canvas, {
        type: 'bar',
        data: this.barChartData,
        options: this.barChartOptions
      });
    }, 10);
  }

  updateChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.createChart();
  }
}
