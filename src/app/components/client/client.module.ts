import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { NavbarClientComponent } from './pages/navbar-client/navbar-client.component';
import { TableComponent } from './pages/table/table.component';


@NgModule({
  declarations: [
    NavbarClientComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
