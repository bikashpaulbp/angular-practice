import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {
  constructor(public sharedService: SharedService) {}
}
