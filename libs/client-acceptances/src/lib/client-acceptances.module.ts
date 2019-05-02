import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClientComponent],
  exports: [ClientComponent]
})
export class ClientAcceptancesModule {}
