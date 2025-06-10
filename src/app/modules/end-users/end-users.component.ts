import { Component, OnInit } from '@angular/core';
import { EndUser } from 'src/app/core/models/end-user.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-end-users',
  templateUrl: './end-users.component.html',
  styleUrls: ['./end-users.component.css']
})
export class EndUsersComponent implements OnInit {
  public endUsers: EndUser[] = [];
  public labels: string[] = [];
  // public callsNumbers: number[] = [];
  // public callsDurations: number[] = [];
  public chartData: number[] = [];
  public selectedMetric: 'clientAge' | 'purchasedProducts' | 'wishlistProducts' = 'clientAge';
  public title: string = "End Users Overview";
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getEndUsersData();

    // this.suppliers = [
    //   { name: 'Supplier A', callsNumber: 100, callsDuration: 100 },
    //   { name: 'Supplier B', callsNumber: 150, callsDuration: 100 },
    //   { name: 'Supplier C', callsNumber: 100, callsDuration: 200 },
    //   { name: 'Supplier D', callsNumber: 200, callsDuration: 300 },
    // ];
  }
 
   updateChartData(): void {
    if (this.selectedMetric === 'clientAge') {
      this.chartData = this.endUsers.map(s => s.clientAge);
      this.title = 'End Users Overview (Age)';
    } 
    else if (this.selectedMetric === 'purchasedProducts'){
      this.chartData = this.endUsers.map(s => s.purchasedProducts);
      this.title = 'End Users Overview (Purchasing)';
    }     
    else {
      this.chartData = this.endUsers.map(s => s.wishlistProducts);
      this.title = 'End Users Overview (Wishlist)';
    }
   }
 
  getEndUsersData(): void {
    this.dataService.getEndUsers().subscribe(data => {
      this.endUsers = data || [];
      this.labels = this.endUsers.map(s => s.clientName);
      // this.callsNumbers = this.suppliers.map(s => s.callsNumber);
      // this.callsDurations = this.suppliers.map(s => s.callsDuration);
      this.updateChartData(); // Initialize chartData
    });
  }
}
