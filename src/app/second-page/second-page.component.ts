import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  
  Output,
  ViewChild,
  
} from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent implements AfterViewInit {
  @ViewChild('mySecondPageHeading') mySecondPageHeading?: ElementRef;

  ngAfterViewInit() {
    console.log(this.mySecondPageHeading.nativeElement.textContent);
  }
  isDisable = false;

  onButtonClick() {
    alert('button clicked');
    this.isDisable = true;
  }

  //lifecycle method
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnDestroy() {}

  ngOnChanges() {}

  @Input() profiles;

  @Output() sendNameEvent = new EventEmitter();

  sendName(name: String) {
    this.sendNameEvent.emit(name);
  }

  // profiles = [
  //   {name: "Mahesh", age: 20, isMarried: false  },
  //   {name: "Ganesh", age: 40, isMarried: true  },
  //   {name: "Topesh", age: 18, isMarried: false  },
  //   {name: "Rakesh", age: 35, isMarried: true  },
  // ]
}
