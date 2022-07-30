import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { NavbarMgComponent } from './pages/navbar-mg/navbar-mg.component';
import { TableComponent } from './pages/table/table.component';


@NgModule({
  declarations: [
    NavbarMgComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
