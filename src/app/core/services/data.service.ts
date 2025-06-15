import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';
import { Product } from '../models/product.model';
import { Material } from '../models/material.model';
import { Client } from '../models/client.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}
  
    getSuppliers(): Observable<Supplier[]> {
        const apiUrl = "http://localhost:20928/crm-charts/suppliers";
        return this.http.get<Supplier[]>(apiUrl);
    }

    getSuppliersMock(): Observable<Supplier[]> {
        const apiUrl = "assets/data/suppliers.json";
        return this.http.get<Supplier[]>(apiUrl);
    }   

    getProducts(): Observable<Product[]> {
        const apiUrl = "http://localhost:20928/crm-charts/products";
        return this.http.get<Product[]>(apiUrl);
    }

    getProductsMock(): Observable<Product[]> {
        const apiUrl = "assets/data/products.json";
        return this.http.get<Product[]>(apiUrl);
    }

    getMaterials(): Observable<Material[]> {
        const apiUrl = "http://localhost:20928/crm-charts/materials";
        return this.http.get<Material[]>(apiUrl);
    }
    
    getMaterialsMock(): Observable<Material[]> {
        const apiUrl = "assets/data/materials.json";
        return this.http.get<Material[]>(apiUrl);
    }

    getClients(): Observable<Client[]> {
        const apiUrl = "http://localhost:20928/crm-charts/clients";
        return this.http.get<Client[]>(apiUrl);
    }

    getClientsMock(): Observable<Client[]> {
        const apiUrl = "assets/data/clients.json";
        return this.http.get<Client[]>(apiUrl);
    }

    getEmployee(): Observable<Employee[]> {
        const apiUrl = "http://localhost:20928/crm-charts/employee";
        return this.http.get<Employee[]>(apiUrl);
    }

    getEmployeeMock(): Observable<Employee[]> {
        const apiUrl = "assets/data/employee.json";
        return this.http.get<Employee[]>(apiUrl);
    }
}