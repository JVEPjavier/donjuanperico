import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Producto } from '../../models/Producto.models';
import { ProductoService } from '../../Service/producto.service';
import { CartService } from '../../Service/cart.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule,MatCardModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  productsList : Producto[] = [];
  _route = inject(Router);

  private _productoService = inject(ProductoService)
  private _carritoService = inject(CartService)

  constructor() {}

  ngOnInit(): void {
      this._productoService.getProducts().subscribe(( data: Producto[]) => {
        this.productsList = data
      })
  }


  navigate(id:number) {
    this._route.navigate(['/products',id])
  }
  
  addToCart(product:Producto) {
    this._carritoService.addProduct(product);
    console.log(this._carritoService.getListCart())
  }

}
