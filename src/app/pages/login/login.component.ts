import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [],
  imports: [MatFormFieldModule, ReactiveFormsModule, MatButtonModule,FormsModule,MatInputModule,MatDatepickerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    rut: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
