import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css',
})
export class JokeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  joke = 'Loading....';

  ngOnInit(): void {
    this.refreshJoke();
  }

  refreshJoke() {
    this.joke = 'Loading....';
    this.apiService.getJoke().subscribe({
      next: (data: any) => (this.joke = data.value),
      error: (error) => console.log(error),
    });
  }
}
