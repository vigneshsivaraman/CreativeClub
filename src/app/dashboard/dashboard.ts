import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class Dashboard {
  constructor(private router: Router) {}

  // Sync tab index with route navigation
  onTabChange(index: number) {
    const routes = ['home', 'userlist'];
    this.router.navigate(['dashboard', routes[index]]);
  }

  // Optional: Calculate active tab from route
  get selectedIndex(): number {
    const path = this.router.url;
    if (path.includes('userlist')) return 1;
    return 0; // default to Home
  }
}
