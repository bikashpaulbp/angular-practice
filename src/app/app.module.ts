import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './second-page/second-page.component';
import { CommonModule } from '@angular/common';
import { NamePipePipe } from './pipes/name-pipe.pipe';
import { BgColorDirective } from './directives/bg-color.directive';
import { JokeComponent } from './components/joke/joke.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    NamePipePipe,
    BgColorDirective,
    JokeComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
