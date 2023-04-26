import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userBaseUrl: string = "http://localhost:5000/api/users";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]> {
    return this.http.get(this.userBaseUrl) as Observable<User[]>;
  }

  get(id: number): Observable<User> {
    return this.http.get(`${this.userBaseUrl}/${id}`) as Observable<User>;
  }

  login(username: string, password: string): Observable<User> {
    return this.http.get(`${this.userBaseUrl}/${username}/${password}`) as Observable<User>;
  }

  create(user: User): Observable<User> {
    return this.http.post(this.userBaseUrl, user) as Observable<User>;
  }

  change(user: User): Observable<any> {
    return this.http.put(`${this.userBaseUrl}/${user.id}`, user) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.userBaseUrl}/${id}`) as Observable<any>;
  }

}
