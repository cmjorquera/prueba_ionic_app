import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module'; // El módulo de rutas para la página de Login
import { LoginPage } from './login.page'; // El componente principal de la página de Login

@NgModule({
  imports: [
    CommonModule,       // Importa CommonModule para funcionalidades comunes de Angular
    FormsModule,        // Importa FormsModule para manejar formularios y ngModel
    IonicModule,        // Importa IonicModule para utilizar componentes de Ionic como ion-header, ion-button, etc.
    LoginPageRoutingModule // Importa el módulo de enrutamiento específico de la página de Login
  ],
  declarations: [LoginPage] // Declara el componente LoginPage para que sea reconocido en este módulo
})
export class LoginPageModule {}
