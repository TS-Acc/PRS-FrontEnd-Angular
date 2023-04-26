import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorBaseUrl = "http://localhost:5000/api/vendors";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(this.vendorBaseUrl) as Observable<Vendor[]>;
  }

  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.vendorBaseUrl}/${id}`) as Observable<Vendor>;
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(this.vendorBaseUrl, vendor) as Observable<Vendor>;
  }

  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${this.vendorBaseUrl}/${vendor.id}`, vendor) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.vendorBaseUrl}/${id}`) as Observable<any>;
  }

}
