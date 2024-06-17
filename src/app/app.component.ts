import { Component } from '@angular/core';
import { SecondPageComponent } from './second-page/second-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = '';
  userName = '';
  profiles = [
    { name: 'Mahesh', age: 20, isMarried: false },
    { name: 'Ganesh', age: 40, isMarried: true },
    { name: 'Topesh', age: 18, isMarried: false },
    { name: 'Rakesh', age: 35, isMarried: true },
  ];

  recieveName(e) {
    this.userName = e;
   
  }
}
