import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir después del login
import { ModalController } from '@ionic/angular'; // Para abrir el modal
import { ModalAgregarUsuarioPage } from '../modal-agregar-usuario/modal-agregar-usuario.page'; // Importa tu modal

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = ''; // Modelo para el nombre de usuario
  mdl_pass: string = ''; // Modelo para la contraseña
  visibleLoading: boolean = false; // Para mostrar el spinner durante el login
  visibleWarning: boolean = false; // Para mostrar mensajes de advertencia
  warningMessage: string = ''; // Mensaje que se muestra en caso de error

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {}

  // Función para manejar el login
  login() {
    // Verifica si los campos están vacíos
    if (this.mdl_user.trim() === '' || this.mdl_pass.trim() === '') {
      this.warningMessage = 'Por favor, completa todos los campos'; // Mensaje de advertencia
      this.visibleWarning = true;
      return;
    }

    // Simula el proceso de inicio de sesión con un spinner
    this.visibleLoading = true;
    this.visibleWarning = false; // Oculta el mensaje de advertencia previo si lo hay

    // Simulamos un pequeño retraso como si estuviéramos procesando el login
    setTimeout(() => {
      // Aquí puedes agregar tu lógica real de autenticación, pero por ahora es un ejemplo
      if (this.mdl_user === 'Cristian' && this.mdl_pass === '123456') {
        this.router.navigate(['/principal']); // Redirige a la página principal si las credenciales son correctas
      } else {
        this.warningMessage = 'Credenciales inválidas'; // Mensaje de error si las credenciales son incorrectas
        this.visibleWarning = true;
      }
      this.visibleLoading = false; // Detiene el spinner después del procesamiento
    }, 1000); // Simulación de tiempo de procesamiento
  }

  // Función para abrir el modal para agregar un usuario
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalAgregarUsuarioPage // Este es el componente modal que deseas mostrar
    });
    return await modal.present(); // Muestra el modal
  }
}
