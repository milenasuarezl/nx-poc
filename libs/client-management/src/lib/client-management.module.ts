import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientAcceptancesModule } from "@nx-poc/client-acceptances";

@NgModule({
  imports: [CommonModule, ClientAcceptancesModule ],
  declarations: [ClientComponent],
  exports: [ClientComponent]
})
export class ClientManagementModule {}
