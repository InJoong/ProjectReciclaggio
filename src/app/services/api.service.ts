import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(LOCALE_ID) public locale: string,private http: HttpClient) { }

  getOrders$(param: string = '/'): Observable<any> {
    console.log(this.locale);
    return this.http.get('http://localhost:5000/api/es/orders' + param);
  }

  postOrder$(category: string,
             subcategory: string,
             alto: string,
             peso: string,
             ancho: string,
             largo: string,
             ubicacion: string,
             dias: string[],
             comentarios: string,
             clientId: string): Observable<any> {

    return this.http.post('http://localhost:5000/api/es/orders', {
      client_id: clientId,
      address: ubicacion,
      comentarios,
      categoria: category,
      subcategoria: subcategory,
      alto,
      peso,
      ancho,
      largo,
      dias
    });
  }

  getCategories$(): Observable<any> {
    return this.http.get('http://localhost:5000/api/es/categories');
  }

  createUser$(user): Observable<any> {
    return this.http.post('http://localhost:5000/api/es/users', user);
  }

}
