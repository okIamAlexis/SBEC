import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarAdminComponent } from './pages/navbar-admin/navbar-admin.component';
import { TableComponent } from './pages/table/table.component';


@NgModule({
  declarations: [
    NavbarAdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
