import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommanderComponent } from './commander/commander.component';
import { ShowCommandComponent } from './commander/show-command/show-command.component';
import { AddEditCommandComponent } from './commander/add-edit-command/add-edit-command.component';
import { CommanderserviceService } from './commanderservice.service';

@NgModule({
  declarations: [
    AppComponent,
    CommanderComponent,
    ShowCommandComponent,
    AddEditCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommanderserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
