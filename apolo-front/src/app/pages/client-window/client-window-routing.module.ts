import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientWindowPage } from './client-window.page';

const routes: Routes = [
  {
    path: '',
    component: ClientWindowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientWindowPageRoutingModule {}
