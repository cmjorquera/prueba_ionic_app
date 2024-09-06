import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {

  constructor(private router: Router) { }

  // Función para manejar la navegación
  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  // Función para cerrar sesión y redirigir al login
  logout() {
    // Aquí puedes agregar la lógica de cerrar sesión, como limpiar los datos del usuario
    this.router.navigate(['/login']); // Redirige al login
  }
}
