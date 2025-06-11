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
  public selectedMetric: "callsNumber" | "callsDuration" | "smsNumber" | "emailsNumber" = "callsNumber";
  public title: string = "Suppliers Calls Overview";
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSuppliersData();

    // this.suppliers = [
    //   { name: "Supplier A", callsNumber: 100, callsDuration: 100 },
    //   { name: "Supplier B", callsNumber: 150, callsDuration: 100 },
    //   { name: "Supplier C", callsNumber: 100, callsDuration: 200 },
    //   { name: "Supplier D", callsNumber: 200, callsDuration: 300 },
    // ];
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