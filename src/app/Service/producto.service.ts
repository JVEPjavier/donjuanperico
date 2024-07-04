import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  _http = inject(HttpClient)

  _urlBaseProducto: string = "http://localhost:8080/Productos"
  _urlBaseAuth: string = "http://localhost:8080/Auth/register"

  constructor() {
  }

  getProducts(): Observable<Producto[]> {
    return this._http.get<Producto[]>(this._urlBaseProducto)
  }

  register(registerRequest: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<any>(this._urlBaseAuth, registerRequest, { headers });
  }

}
