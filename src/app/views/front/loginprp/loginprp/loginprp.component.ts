import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginprp',
  imports: [],
  templateUrl: './loginprp.component.html',
  styleUrl: './loginprp.component.css'
})
export class LoginprpComponent {
constructor(private router:Router) { }
proprietaire(){
  console.log('main clicked');
  this.router.navigate(['/proprietaire']);
}
}
