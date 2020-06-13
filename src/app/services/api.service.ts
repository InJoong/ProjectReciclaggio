import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getOrders$(param: string = "/"): Observable<any> {
    return this.http.get('http://localhost:5000/api/es/orders'+param);
  }

  putOrders$(order_id, driver_id): Observable<any> {
    console.log("hhh")
    return this.http.put('http://localhost:5000/api/es/orders', {
      id: order_id,
      driver_id: driver_id
    });
  }


}
