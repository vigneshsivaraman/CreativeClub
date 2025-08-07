import { Component, OnInit } from '@angular/core';
import { Loader } from '../loader/loader';

@Component({
  standalone: true,
  selector: 'app-user-list',
  templateUrl:'./user-list.html',
  styleUrls:['./user-list.css'],
  imports:[Loader]
})
export class UserListComponent implements OnInit{
  

  public isLoading = true;


  ngOnInit(): void {
    // Simulate loading delay (e.g., 2 seconds)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
