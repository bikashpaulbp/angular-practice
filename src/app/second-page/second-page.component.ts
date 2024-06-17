import { Component, EventEmitter, Input, input, Output } from '@angular/core';

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

  @Input() profiles;

  @Output() sendNameEvent = new EventEmitter();

  sendName(name:String){
    this.sendNameEvent.emit(name)
  }

  // profiles = [
  //   {name: "Mahesh", age: 20, isMarried: false  },
  //   {name: "Ganesh", age: 40, isMarried: true  },
  //   {name: "Topesh", age: 18, isMarried: false  },
  //   {name: "Rakesh", age: 35, isMarried: true  },
  // ]

}
