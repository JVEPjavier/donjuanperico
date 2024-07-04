import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  _http = inject(HttpClient)

  _urlBaseProducto: string = "http://localhost:8080/Auth"

  constructor() { }

  register(registerRequest: any) {
    return this._http.post<any>(`${this._urlBaseProducto}/register`, registerRequest);
  }
}
