import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './second-page/second-page.component';
import { CommonModule } from '@angular/common';
import { NamePipePipe } from './pipes/name-pipe.pipe';
import { BgColorDirective } from './directives/bg-color.directive';
@NgModule({
  declarations: [AppComponent, SecondPageComponent, NamePipePipe, BgColorDirective],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
