import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from  '@angular/forms';

import {AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
