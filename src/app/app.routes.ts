import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { HomeComponent } from './home-page/home-page';
import { UserListComponent } from './user-list/user-list';
import { Login } from './login/login';
import { Register } from './register/register';


export const routes: Routes = [
  {path:'login', component: Login},
  {path:'register', component:Register},
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'userlist', component: UserListComponent }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
