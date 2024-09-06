import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-agregar-usuario',
  templateUrl: './modal-agregar-usuario.page.html',
  styleUrls: ['./modal-agregar-usuario.page.scss'],
})
export class ModalAgregarUsuarioPage {
  
  nombreUsuario: string = '';  // Variable para el nombre del usuario
  correoUsuario: string = '';  // Variable para el correo del usuario

  constructor(private modalController: ModalController) {}

  // Función para cerrar el modal
  dismissModal() {
    this.modalController.dismiss();
  }

  // Función para agregar el usuario (puedes agregar la lógica real aquí)
  agregarUsuario() {
    if (this.nombreUsuario.trim() === '' || this.correoUsuario.trim() === '') {
      console.log('Por favor, completa todos los campos');
      return;
    }

    // Aquí puedes agregar la lógica para manejar la adición del usuario
    console.log('Usuario agregado:', this.nombreUsuario, this.correoUsuario);

    // Cierra el modal después de agregar el usuario
    this.dismissModal();
  }
}
