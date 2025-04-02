import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  private jsonUrl = 'assets/mock-data/dashboard.json';

constructor(private http: HttpClient) {}

  // getDashboardStats(): Observable<any> {
  //   const mockData = {
  //     totalUsers: 1500,
  //     activeUsers: 850,
  //     revenue: 125000,
  //     growthRate: 12.5
  //   };
  //   return of(mockData);
  // }

  getDashboardStats(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
