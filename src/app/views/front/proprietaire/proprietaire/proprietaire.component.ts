import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-proprietaire',
  imports: [],
  templateUrl: './proprietaire.component.html',
  styleUrl: './proprietaire.component.css'
})
export class ProprietaireComponent {
constructor(private router:Router) { }
  about(){
  console.log('main clicked');
  this.router.navigate(['/about']);
}
}
