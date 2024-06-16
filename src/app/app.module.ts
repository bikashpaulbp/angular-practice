import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './second-page/second-page.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, SecondPageComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
