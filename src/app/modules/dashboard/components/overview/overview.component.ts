import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from 'src/app/core/services/dashboard-data.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  stats: any;

  constructor(private dashboardService: DashboardDataService) {}

  ngOnInit() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.stats = data;
    });
  }
}
