import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductoDetailComponent } from './pages/producto-detail/producto-detail.component';

export const routes: Routes = [
    {path: "", component:InicioComponent},
    {path: "login",component:LoginComponent},
    {path: "register",component:RegisterComponent},
    {path: "producto/:id", component:ProductoDetailComponent}
];
