import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},

  {path: 'auth',loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},

  {path: 'dashboardMg', loadChildren: () => import('./components/manager/manager.module').then( module => module.ManagerModule), canActivate:[AuthGuard]},

  {path: 'dashboardClient', loadChildren: () => import('./components/client/client.module').then( module => module.ClientModule), canActivate:[AuthGuard]},

  {path: 'dashboardAdm', loadChildren: () => import('./components/admin/admin.module').then( module => module.AdminModule), canActivate:[AuthGuard]},

  {path: '**', redirectTo: 'auth'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
