import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomCardModule } from 'custom-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
