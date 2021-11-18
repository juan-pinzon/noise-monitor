import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/compat/auth-guard'

import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {NodesComponent} from "./components/nodes/nodes.component";
import {AlertsComponent} from "./components/alerts/alerts.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToItems)
  },
  {
    path: 'nodes',
    component: NodesComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
