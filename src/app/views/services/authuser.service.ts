import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  private apiUrl = 'http://192.168.1.10:3000/api/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<AuthuserService[]> {
    return this.http.get<AuthuserService[]>(this.apiUrl);
  }



 
  login(body:any){
    return this.http.post('http://localhost:4200/login', body);
  }
  
}
import { Observable } from 'rxjs';

//contact(data: any): Observable<any> {
  // method implementation
//}
