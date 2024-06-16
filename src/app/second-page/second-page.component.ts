import { Component } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent {
  isDisable = false;

  onButtonClick() {
    alert('button clicked');
    this.isDisable = true;
    
  }

  profiles = [
    {name: "Mahesh", age: 20, isMarried: false  },
    {name: "Ganesh", age: 40, isMarried: true  },
    {name: "Topesh", age: 18, isMarried: false  },
    {name: "Rakesh", age: 35, isMarried: true  },
  ]

}
