import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    CommonModule,
    CommonModule,
    RouterModule,
    RouterModule,
    AppRoutingModule,
    RouterModule,
    RouterModule,
    RouterTestingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
