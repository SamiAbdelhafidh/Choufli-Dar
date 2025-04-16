import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [RouterModule,
    CommonModule
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  constructor(private router: Router) { }
  
  login(){
    console.log('Login clicked');
    this.router.navigate(['/loginn']);
  }
  logout() {
    localStorage.removeItem('token'); // Remove the token
    this.router.navigate(['/loginn']); // Redirect to login page
  }
  display=true
  testtoken(){
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token exists:', token);
      this.display=false;

    } else {
      this.display=true
} 
      console.log('No token found in local storage.');
    }


}
