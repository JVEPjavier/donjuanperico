import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu'
import { Producto } from '../../models/Producto.models';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink, CommonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  cartItems: Producto[] = [];
  _serviceCart = inject(CartService)
  
  ngOnInit(): void {
    this._serviceCart.getListCart().subscribe((items: Producto[]) => {
      this.cartItems = items;
    });
  }
  menuOption: string = ""

  onOption(menuOption: string) {
    this.menuOption = menuOption
  }
  
}
