import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

constructor(public sharedService: SharedService){

}

}
