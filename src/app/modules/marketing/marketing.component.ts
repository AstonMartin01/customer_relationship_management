import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  public employeesOrProducts: any[] = [];
  public labels: string[] = [];
  public chartData: number[] = [];
  public selectedInventoryType: "internalProducts" | "employee" = "internalProducts";
  public selectedMetric: string = "";
  public title: string = "Marketing Overview";
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
    // this.getInternalProducts();
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
    if (this.selectedInventoryType === "internalProducts") {
      this.getAllProducts();
      this.selectedMetric = "price";
    } 
    else {
      this.getEmployeeData();
      this.selectedMetric = "performanceScore";
    }
  }

  updateChartData(): void {
    if (this.selectedMetric === "performanceScore") {
      this.chartData = this.employeesOrProducts.map(s => s.performanceScore);
      this.title = "Employee Overview (Performance Score)";
    } 
    else if (this.selectedMetric === "unexpectedDaysOff") {
      this.chartData = this.employeesOrProducts.map(s => s.unexpectedDaysOff);
      this.title = "Employee Overview (Unexpected Days Off)";
    }
    else if (this.selectedMetric === "workedMonths") {
      this.chartData = this.employeesOrProducts.map(s => s.workedMonths);
      this.title = "Employee Overview (Worked Months)";
    }
    else if (this.selectedMetric === "assignedTasks") {
      this.chartData = this.employeesOrProducts.map(s => s.assignedTasks);
      this.title = "Employee Overview (Assigned Tasks)";
    }
    else if (this.selectedMetric === "solvedTasks") {
      this.chartData = this.employeesOrProducts.map(s => s.solvedTasks);
      this.title = "Employee Overview (Solved Tasks)";
    }            
    else if (this.selectedMetric === "salary") {
      this.chartData = this.employeesOrProducts.map(s => s.salary);
      this.title = "Employee Overview (Salary)";
    }
    else if (this.selectedMetric === "price") {
      this.chartData = this.employeesOrProducts.map(s => s.price);
      this.title = "Products Overview (Prices)";
    } 
    else if (this.selectedMetric === "priceWithVAT") {
      this.chartData = this.employeesOrProducts.map(s => s.priceWithVAT);
      this.title = "Products Overview (Prices VAT)";
    } 
    else if (this.selectedMetric === "rating") {
      this.chartData = this.employeesOrProducts.map(s => s.rating);
      this.title = "Products Overview (Rating)";
    } 
    else if (this.selectedMetric === "discountedQuantity") {
      this.chartData = this.employeesOrProducts.map(s => s.discountedQuantity);
      this.title = "Products Overview (Discounted)";
    } 
    else {
      this.chartData = this.employeesOrProducts.map(s => s.sold);
      this.title = "Products Overview (Sold)";
    }
  }

  getAllProducts(): void {
    this.dataService.getProducts().pipe(
      catchError(error => {
        // console.error('Database fetch failed. Using mock data.', error);
        return this.dataService.getProductsMock();
      })
    ).subscribe(data => this.processData(data));
  }  

  getEmployeeData(): void {
    this.dataService.getEmployee().pipe(
      catchError(error => {
        // console.error('Database fetch failed. Using mock data.', error);
        return this.dataService.getEmployeeMock();
      })
    ).subscribe(data => {
      const internalProducts = (data || []).filter(e => e.departmentName === "marketing");
      this.processData(internalProducts);
    });
  }

  processData(data: any[]): void {
    this.employeesOrProducts = data || [];
    this.labels = this.employeesOrProducts.map(s => s.name);
    this.updateChartData();
  }
}
