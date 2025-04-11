import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterModule
    
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
}
