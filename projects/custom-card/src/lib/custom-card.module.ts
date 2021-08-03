import { NgModule } from '@angular/core';
import { CustomCardComponent } from './custom-card.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CustomCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    CustomCardComponent
  ]
})
export class CustomCardModule { }
