import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
