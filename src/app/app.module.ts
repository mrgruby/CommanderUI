import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommanderComponent } from './commander/commander.component';
import { ShowCommandComponent } from './commander/show-command/show-command.component';
import { AddEditCommandComponent } from './commander/add-edit-command/add-edit-command.component';
import { CommanderService } from './commander.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommanderComponent,
    ShowCommandComponent,
    AddEditCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommanderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
