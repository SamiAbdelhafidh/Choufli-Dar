import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginn',
  imports: [],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css'
})
export class LoginnComponent {
constructor(private router:Router) { }
proprietaire(){
  console.log('main clicked');
  this.router.navigate(['/main']);
}
}
