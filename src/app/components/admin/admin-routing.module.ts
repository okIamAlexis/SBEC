import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAdminComponent } from './pages/navbar-admin/navbar-admin.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'dashboardAdm', component:  NavbarAdminComponent },
    
    {path: '**', redirectTo: 'dashboardAdm'}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
