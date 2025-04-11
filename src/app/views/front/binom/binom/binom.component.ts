import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-binom',
  imports: [CommonModule],
  templateUrl: './binom.component.html',
  styleUrl: './binom.component.css'
})
export class BinomComponent {
  cards = [1, 2]; // Two default cards

  addCard() {
    this.cards.push(this.cards.length + 1);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Form submitted!');
  }
  constructor(private router:Router) { }
  contact(){
    console.log('main clicked');
    this.router.navigate(['/butn-contact']);
  }
}
