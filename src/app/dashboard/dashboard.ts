import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Loader } from '../loader/loader';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../services/auth';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class Dashboard implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService,

  ) {}


  onTabChange(index: number) {
    const routes = ['home', 'userlist'];
    this.router.navigate(['dashboard', routes[index]]);
  }

  get selectedIndex(): number {
    const path = this.router.url;
    if (path.includes('userlist')) return 1;
    return 0;
  }

  async ngOnInit(): Promise<void> {
    // Simulate loading delay (e.g. 2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  logout() {
    this.authService.logout();
    }
}
