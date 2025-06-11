import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {
  public inventory: any[] = [];
  public labels: string[] = [];
  public chartData: number[] = [];
  public selectedInventoryType: "allProducts" | "productInHouse" | "productByPartners" | "rawMaterials" = "allProducts";
  public selectedMetric: string = "price";
  public title: string = "Products Overview (Prices)";
  public chartType: string = "bar";
  public chartTypeOrientation: string = "x";
  public chartTension: number = 0;
  public selectedChartType: string = "barVertical";  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.selectedMetric = "price";
    this.selectedChartType = "barVertical";
    this.onChartTypeChange();
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

  onInventoryTypeChange(): void {
    if (this.selectedInventoryType === "allProducts") {
      this.getAllProducts();
    } 
    else if (this.selectedInventoryType === "productInHouse") {
      this.getInternalProducts();
    }  
    else if (this.selectedInventoryType === "productByPartners") {
      this.getExternalProducts();
    } 
    else {
      this.getRawMaterialsData();
    }
  }

  updateChartData(): void {
    if (this.selectedMetric === "price") {
      this.chartData = this.inventory.map(s => s.price);
      this.title = "Products Overview (Prices)";
    } 
    else if (this.selectedMetric === "priceWithVAT") {
      this.chartData = this.inventory.map(s => s.priceWithVAT);
      this.title = "Products Overview (Prices VAT)";
    } 
    else {
      this.chartData = this.inventory.map(s => s.rating);
      this.title = "Products Overview (Rating)";
    }
  }

  getAllProducts(): void {
    this.dataService.getProducts().subscribe(data => {
      this.inventory = data || [];
      this.labels = this.inventory.map(s => s.name);
      this.updateChartData();
    });
  }

  getInternalProducts(): void {
    this.dataService.getProducts().subscribe(data => {
      this.inventory = data || [];
      this.inventory = this.inventory.filter(e => e.type === "internal");
      this.labels = this.inventory.map(s => s.name);
      this.updateChartData();
    });
  }

  getExternalProducts(): void {
    this.dataService.getProducts().subscribe(data => {
      this.inventory = data || [];
      this.inventory = this.inventory.filter(e => e.type === "external");
      this.labels = this.inventory.map(s => s.name);
      this.updateChartData();
    });
  }

  getRawMaterialsData(): void {
    this.dataService.getRawMaterials().subscribe(data => {
      this.inventory = data || [];
      this.labels = this.inventory.map(s => s.name);
      this.updateChartData();
    });
  }
}

