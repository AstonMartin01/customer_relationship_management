import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/core/models/supplier.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public suppliers: Supplier[] = [];
  public labels: string[] = [];
  // public callsNumbers: number[] = [];
  // public callsDurations: number[] = [];
  public chartData: number[] = [];
  public selectedMetric: string = "";
  public title: string = "Suppliers Calls Overview";
  public chartType: string = "bar";
  public chartTypeOrientation: string = "x";
  public chartTension: number = 0;
  public selectedChartType: string = "barVertical";

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSuppliersData();
    this.selectedMetric = "callsNumber";
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
    if (this.selectedMetric === "callsNumber") {
      this.chartData = this.suppliers.map(s => s.callsNumber);
      this.title = "Suppliers Overview (Calls Number)";
    } 
    else if (this.selectedMetric === "callsDuration") {
      this.chartData = this.suppliers.map(s => s.callsDuration);
      this.title = "Suppliers Overview (Calls Duration)";
    }  
    else if (this.selectedMetric === "smsNumber") {
      this.chartData = this.suppliers.map(s => s.smsNumber);
      this.title = "Suppliers Overview (SMS Number)";
    } 
    else {
      this.chartData = this.suppliers.map(s => s.emailsNumber);
      this.title = "Suppliers Calls Overview (E-mails Number)";
    }
  }

  getSuppliersData(): void {
    this.dataService.getSuppliers().subscribe(data => {
      this.suppliers = data || [];
      this.labels = this.suppliers.map(s => s.name);
      // this.callsNumbers = this.suppliers.map(s => s.callsNumber);
      // this.callsDurations = this.suppliers.map(s => s.callsDuration);
      this.updateChartData(); // Initialize chartData
    });
  }
}