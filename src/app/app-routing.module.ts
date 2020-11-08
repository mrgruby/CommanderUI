import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CommanderComponent} from './commander/commander.component'

const routes: Routes = [
  {path:'commander', component:CommanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
