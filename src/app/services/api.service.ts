import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(LOCALE_ID) public locale: string,private http: HttpClient) { }

  getOrders$(param: string = "/"): Observable<any> {
    console.log(this.locale);
    return this.http.get(`http://localhost:5000/api/${this.locale}/orders${param}`);
  }

  createUser$(user): Observable<any> {
    return this.http.post(`http://localhost:5000/api/${this.locale}/users`, user);
  }

}