import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Material } from 'src/app/core/models/material.model';
import { Product } from 'src/app/core/models/product.model';
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
  public selectedInventoryType: "allProducts" | "productInHouse" | "productByPartners" | "materials" = "allProducts";
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
      this.getMaterials();
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
    this.dataService.getProducts().pipe(
      catchError(error => {
        // console.error('Database fetch failed. Using mock data.', error);
        return this.dataService.getProductsMock();
      })
    ).subscribe(data => this.processProductsData(data));
  }

  getInternalProducts(): void {
    this.dataService.getProducts().pipe(
      catchError(error => {
        // console.error('Database fetch failed. Using mock data.', error);
        return this.dataService.getProductsMock();
      })
    ).subscribe(data => {
      const internalProducts = (data || []).filter(e => e.type === 'internal');
      this.processProductsData(internalProducts);
    });
  }

  getExternalProducts(): void {
    this.dataService.getProducts().pipe(
      catchError(error => {
        // console.error('Database fetch failed. Using mock data.', error);
        return this.dataService.getProductsMock();
      })
    ).subscribe(data => {
      const externalProducts = (data || []).filter(e => e.type === 'external');
      this.processProductsData(externalProducts);
    });
  }

  processProductsData(data: Product[]): void {
    this.inventory = data || [];
    this.labels = this.inventory.map(s => s.name);
    this.updateChartData();
  }

  getMaterials(): void {
    this.dataService.getMaterialsMock().pipe(
      catchError(error => {
        // console.error('Database fetch failed. Using mock data.', error);
        return this.dataService.getMaterials();
      })
    ).subscribe(data => this.processMaterialsData(data));
  }

  processMaterialsData(data: Material[]): void {
    this.inventory = data || [];
    this.labels = this.inventory.map(s => s.name);
    this.updateChartData();
  }
}

