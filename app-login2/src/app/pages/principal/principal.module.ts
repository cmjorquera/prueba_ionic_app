import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module'; // Importa el módulo de enrutamiento
import { PrincipalPage } from './principal.page'; // Importa el componente de la página principal

@NgModule({
  imports: [
    CommonModule,          // Proporciona directivas comunes como *ngIf, *ngFor, etc.
    FormsModule,           // Proporciona formularios y binding para ngModel
    IonicModule,           // Proporciona componentes de Ionic como ion-header, ion-button, etc.
    PrincipalPageRoutingModule // Importa el módulo de enrutamiento específico para la página principal
  ],
  declarations: [PrincipalPage] // Declara la página PrincipalPage para que el sistema la reconozca
})
export class PrincipalPageModule {}
