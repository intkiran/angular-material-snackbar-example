import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicSnackbarComponent } from './basic-snackbar/basic-snackbar.component';


@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,BasicSnackbarComponent],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[BasicSnackbarComponent]
})
export class AppModule { }
