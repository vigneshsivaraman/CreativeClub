import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  imports: [CommonModule, Loader],
})
export class HomeComponent {
  activePage = 'login';
public isLoading = true

   async ngOnInit(): Promise<void> {
    // Simulate loading delay (e.g. 2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.isLoading = false;
  }

}
