import { Component, inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UsuarioService } from '../../Service/usuario.service';
import { Usuario } from '../../models/Usuario.models';
import { ProductoService } from '../../Service/producto.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule,FormsModule,MatInputModule,MatDatepickerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  _registerService = inject(ProductoService)

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    correoElectronico: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required])
  });

  
  constructor() {

  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.registroForm.valid) {
      this._registerService.register(this.registroForm.value).subscribe(
        response => {
          console.log('Registro exitoso', response);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }
}

