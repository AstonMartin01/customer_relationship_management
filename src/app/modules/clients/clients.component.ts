import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients: Client[] = [];
  public labels: string[] = [];
  // public callsNumbers: number[] = [];
  // public callsDurations: number[] = [];
  public chartData: number[] = [];
  public selectedMetric: string = "age";
  public title: string = "End Users Overview";
  public chartType: string = "bar";
  public chartTypeOrientation: string = "x";
  public chartTension: number = 0;
  public selectedChartType: string = "barVertical"; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getClientsData();
    this.selectedMetric = "age";
    this.selectedChartType = "barVertical";
    this.onChartTypeChange();
    // this.suppliers = [
    //   { name: "Supplier A", callsNumber: 100, callsDuration: 100 },
    //   { name: "Supplier B", callsNumber: 150, callsDuration: 100 },
    //   { name: "Supplier C", callsNumber: 100, callsDuration: 200 },
    //   { name: "Supplier D", callsNumber: 200, callsDuration: 300 },
    // ];
  }
 
  onChartTypeChange(): void {
    switch (this.selectedChartType) {
      case "barVertical":
        this.chartType = "bar";
        this.chartTypeOrientation = "x";
        this.chartTension = 0;
        break;
      case "barHorizontal":
        this.chartType = "bar";
        this.chartTypeOrientation = "y";
        this.chartTension = 0;
        break;
      case "lineSquared":
        this.chartType = "line";
        this.chartTypeOrientation = "x";
        this.chartTension = 0;
        break;
      case "areaRounded":
        this.chartType = "line";
        this.chartTypeOrientation = "x";
        this.chartTension = 0.5;
        break;
      case "pie":
        this.chartType = "pie";
        this.chartTypeOrientation = "x";
        this.chartTension = 0;
        break;
      case "doughnut":
        this.chartType = "doughnut";
        this.chartTypeOrientation = "x";
        this.chartTension = 0;
        break;
    }
  }

  updateChartData(): void {
    if (this.selectedMetric === "age") {
      this.chartData = this.clients.map(s => s.age);
      this.title = "End Users Overview (Age)";
    } 
    else if (this.selectedMetric === "purchasedProductsQuantity"){
      this.chartData = this.clients.map(s => s.purchasedProductsQuantity);
      this.title = "End Users Overview (Purchasing)";
    }     
    else {
      this.chartData = this.clients.map(s => s.wishlistProductsQuantity);
      this.title = "End Users Overview (Wishlist)";
    }
   }
 
  getClientsData(): void {
    this.dataService.getClients().subscribe(data => {
      this.clients = data || [];
      this.labels = this.clients.map(s => s.name);
      // this.callsNumbers = this.suppliers.map(s => s.callsNumber);
      // this.callsDurations = this.suppliers.map(s => s.callsDuration);
      this.updateChartData(); // Initialize chartData
    });
  }
}
