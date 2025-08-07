import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  imports: [ Loader],
})
export class HomeComponent implements OnInit {
  activePage = 'login';
  public isLoading = true;

  ngOnInit(): void {
    // Simulate loading delay (e.g., 2 seconds)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
