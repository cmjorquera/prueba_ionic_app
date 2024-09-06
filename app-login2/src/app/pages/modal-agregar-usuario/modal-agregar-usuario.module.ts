import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModalAgregarUsuarioPageRoutingModule } from './modal-agregar-usuario-routing.module'; // Importa el módulo de enrutamiento del modal
import { ModalAgregarUsuarioPage } from './modal-agregar-usuario.page'; // Importa el componente del modal

@NgModule({
  imports: [
    CommonModule,                 // Módulo Angular que incluye directivas como *ngIf, *ngFor, etc.
    FormsModule,                  // Módulo para formularios y el uso de ngModel
    IonicModule,                  // Módulo de Ionic para usar sus componentes (ion-button, ion-input, etc.)
    ModalAgregarUsuarioPageRoutingModule // Módulo de enrutamiento específico para este modal
  ],
  declarations: [ModalAgregarUsuarioPage] // Declara el componente del modal
})
export class ModalAgregarUsuarioPageModule {}
