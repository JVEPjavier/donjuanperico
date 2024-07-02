import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from '../../ui/post/post.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule,NgOptimizedImage,MatIcon,MatButtonModule,PostComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
