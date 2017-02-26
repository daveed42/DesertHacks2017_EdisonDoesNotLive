import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PreRekt } from './prerekt.component';
import { PostRekt } from './postrekt.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
    AppRoutingModule
    ],
  declarations: [ AppComponent, PreRekt, PostRekt ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
