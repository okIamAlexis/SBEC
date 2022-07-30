import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarMgComponent } from './pages/navbar-mg/navbar-mg.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'dashboardMg', component: NavbarMgComponent},

    {path: '**', redirectTo: 'dashboardMg'}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
