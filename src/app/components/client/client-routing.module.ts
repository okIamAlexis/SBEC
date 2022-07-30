import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarClientComponent } from './pages/navbar-client/navbar-client.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'dashboardClient', component:  NavbarClientComponent },
    
    {path: '**', redirectTo: 'dashboardClient'}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
