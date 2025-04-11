import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  imports: [],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  constructor(private router:Router) { }
  main(){
    console.log('main clicked');
    this.router.navigate(['/main']);
  }
}
