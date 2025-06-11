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
  public selectedMetric: "price" | "priceWithVAT" | "rating" = "price";
  public title: string = "Products Overview (Prices)";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllProducts();
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

