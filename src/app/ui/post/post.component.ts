import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Producto } from '../../models/Producto.models';
import { ProductoService } from '../../Service/producto.service';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule,MatCardModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  productsList : Producto[] = [];

  private _apiService = inject(ProductoService)

  constructor() {}

  ngOnInit(): void {
      this._apiService.getProducts().subscribe(( data: Producto[]) => {
        this.productsList = data
      })
  }

}
