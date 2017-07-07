import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'
import AppRoutes from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
