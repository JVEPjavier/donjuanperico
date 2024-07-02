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

  constructor() {
  }

  getProducts(): Observable < Producto[] > {
      return this._http.get<Producto[]>(this._urlBaseProducto)
    }

}
