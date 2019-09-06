import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './daten-model/product';
import { Family } from './daten-model/family';
import { Transaction } from './daten-model/transaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) {}

  get_products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/products');
  }
  get_families(): Observable<Family[]> {
    return this.http.get<Family[]>(this.baseUrl + '/families');
  }
  get_locations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl + '/locations');
  }
  get_transactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl + '/families');
  }
}
