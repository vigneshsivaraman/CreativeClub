import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // You missed importing this

@Component({
  selector: 'app-loader',
  standalone: true, // optional if using standalone components
  templateUrl: './loader.html',
  styleUrls: ['./loader.css']
})
export class Loader {

  isLoading = true;

  constructor(private http: HttpClient) {}  // Inject HttpClient properly

  someApiCall() {
    this.isLoading = true;
    this.http.get('https://api.example.com/data')  // Replace with your actual URL
      .subscribe(() => {
        this.isLoading = false;
      });
  }

}
