import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  imports: [CommonModule],
})
export class HomeComponent {
  activePage = 'login';
}
