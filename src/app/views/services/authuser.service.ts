import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  contact(data: any) {
    return this.http.post('http://localhost:4200/register', data);
  }
  
  constructor(private http: HttpClient) { }

  register(body:any){
    return this.http.post('http://localhost:4200/register', body);
  }

  login(body:any){
    return this.http.post('http://localhost:4200/login', body);
  }
}
import { Observable } from 'rxjs';

//contact(data: any): Observable<any> {
  // method implementation
//}
