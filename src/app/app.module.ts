import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import {environment} from "../environments/environment";
import { HeaderComponent } from './components/header/header.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NodesComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
