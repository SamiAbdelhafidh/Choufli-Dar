import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
    constructor(private http: HttpClient) {}

    private apiUrl = 'https://choufli-dar-back-endrz.onrender.com/'; 
    //private apiUrl = 'http://localhost:5000/';


    addNewStudent(profile: any): Observable<any> {
        return this.http.post(`${this.apiUrl}api/auth/register`, profile);
      }
      loginemployee(profile: any): Observable<any> {
        return this.http.post(`${this.apiUrl}api/auth/login`, profile);
      }
      prpemployee(profile: any): Observable<any> {
        return this.http.post(`${this.apiUrl}api/auth/proprietaire`, profile);
      }
      payemployee(profile: any): Observable<any> {
        return this.http.post(`${this.apiUrl}api/auth/pay`, profile);
      }
      binomemployee(profile: any): Observable<any> {
        return this.http.post(`${this.apiUrl}api/auth/binom`, profile);
      }
}