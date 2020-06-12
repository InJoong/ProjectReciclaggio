import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map, retry} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {}

  private extraData(res: Response) {
    return res || {};
  }

  getOrders(): Observable<any> {
    return this.http.get('http://localhost:5000/api/es/orders').pipe(map(this.extraData), retry(3));
  }
}
