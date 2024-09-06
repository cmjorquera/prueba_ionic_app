import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAgregarUsuarioPage } from './modal-agregar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAgregarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAgregarUsuarioPageRoutingModule {}