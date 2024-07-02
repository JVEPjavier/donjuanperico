import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule,FormsModule,MatInputModule,MatDatepickerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    correoElectronico: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required])
  });

  constructor() {

  }


  onSubmit() {
    // Implementar la lógica para enviar los datos del formulario al servidor
    console.log(this.registroForm.value);
  }
}
