import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ClientWindowPageRoutingModule } from './client-window-routing.module';


import { ClientWindowPage } from './client-window.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientWindowPageRoutingModule,
  ],
  declarations: [ClientWindowPage]
})
export class ClientWindowPageModule {}