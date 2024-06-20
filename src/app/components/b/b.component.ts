import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
})
export class BComponent {
  constructor(public sharedService: SharedService) {}
}
