import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  requestBaseUrl = "http://localhost:5000/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(this.requestBaseUrl) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.requestBaseUrl}/${id}`) as Observable<Request>;
  }

  requestsInReviewStatus(id: number): Observable<Request[]> {
    return this.http.get(`${this.requestBaseUrl}/reviews/${id}`) as Observable<Request[]>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(this.requestBaseUrl, request) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${this.requestBaseUrl}/${request.id}`, request) as Observable<any>;
  }

  approveRequest(request: Request): Observable<any> {
    return this.http.put(`${this.requestBaseUrl}/approve/${request.id}`, request) as Observable<any>;
  }

  rejectRequest(request: Request): Observable<any> {
    return this.http.put(`${this.requestBaseUrl}/reject/${request.id}`, request) as Observable<any>;
  }

  reviewRequest(request: Request): Observable<any> {
    return this.http.put(`${this.requestBaseUrl}/review/${request.id}`, request) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.requestBaseUrl}/${id}`) as Observable<any>;
  }

}
