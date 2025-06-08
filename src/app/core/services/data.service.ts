import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';
import { Product } from '../models/product.model';
import { RawMaterial } from '../models/raw-material.model';
import { EndUser } from '../models/end-user.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}
  
    getSuppliers(): Observable<Supplier[]> {
        const apiUrl = 'assets/data/suppliers.json';
        return this.http.get<Supplier[]>(apiUrl);
    }

    getProducts(): Observable<Product[]> {
        const apiUrl = 'assets/data/products.json';
        return this.http.get<Product[]>(apiUrl);
    }

    getRawMaterials(): Observable<RawMaterial[]> {
        const apiUrl = 'assets/data/raw-materials.json';
        return this.http.get<RawMaterial[]>(apiUrl);
    }

    getEndUsers(): Observable<EndUser[]> {
        const apiUrl = 'assets/data/end-users.json';
        return this.http.get<EndUser[]>(apiUrl);
    }

    getEmployee(): Observable<Employee[]> {
        const apiUrl = 'assets/data/employee.json';
        return this.http.get<Employee[]>(apiUrl);
    }
}