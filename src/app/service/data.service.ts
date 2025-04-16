import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
    constructor(private http: HttpClient) {}

    addNewStudent(profile: any): Observable<any> {
        return this.http.post(`http://localhost:5000/api/auth/register`, profile);
      }
      loginemployee(profile: any): Observable<any> {
        return this.http.post(`http://localhost:5000/api/auth/login`, profile);
      }
      prpemployee(profile: any): Observable<any> {
        return this.http.post(`http://localhost:5000/api/auth/proprietaire`, profile);
      }
      payemployee(profile: any): Observable<any> {
        return this.http.post(`http://localhost:5000/api/auth/pay`, profile);
      }
      
}