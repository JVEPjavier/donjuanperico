import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Producto } from '../models/Producto.models';
import { BehaviorSubject } from 'rxjs';
import { ProductItemCart } from '../models/Producto.models';
import { StorageService } from './storage.service';
import { Observable, map } from 'rxjs';
import { signalSlice } from 'ngxtension/signal-slice';
import { isPlatformBrowser } from '@angular/common';


interface State {
  products: ProductItemCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private listProductSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);
  public listProduct$: Observable<Producto[]> = this.listProductSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    let initialCart: Producto[] = [];
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('cart');
      initialCart = savedCart ? JSON.parse(savedCart) : [];
    }
    this.listProductSubject = new BehaviorSubject<Producto[]>(initialCart);
    this.listProduct$ = this.listProductSubject.asObservable();
  }

  addProduct(producto: Producto): void {
    const currentList = this.listProductSubject.value;
    const updatedList = [...currentList, producto];
    this.listProductSubject.next(updatedList);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(updatedList));
    }
  }

  getListCart(): Observable<Producto[]> {
    return this.listProduct$;
  }

}
