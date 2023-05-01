import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  requestlineBaseUrl = "http://localhost:5000/api/requestlines"

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.requestlineBaseUrl}/${id}`) as Observable<Requestline>;
  }

  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(this.requestlineBaseUrl, requestline) as Observable<Requestline>;
  }

  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${this.requestlineBaseUrl}/${requestline.id}`, requestline) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.requestlineBaseUrl}/${id}`) as Observable<any>
  }

}
