import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ClientManagementModule } from '@addi/client-management';
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ClientManagementModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
