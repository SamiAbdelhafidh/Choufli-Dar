import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router:Router) { }
  listings = [
    {
      image: 'assets/images/image1.jpg',
      alt: 'Chambre spacieuse',
      line1: 'une chambre spacieuse dans s+2',
      line2: 'au centre ville proche de tous',
      price: '200dt'
    },
    {
      image: 'assets/images/image2.jpg',
      alt: 'Chambre individuelle',
      line1: 'une chambre individuelle pour une personne dans s+3',
      line2: 'au centre ville',
      price: '190dt'
    },
    {
      image: 'assets/images/image3.jpg',
      alt: 'Maison s+2 étudiants',
      line1: 'un maison s+2 pour les étudiants au centre proche de tous',
      line2: 'pour chaque\'un',
      price: '210dt'
    },
    {
      image: 'assets/images/image4.jpg',
      alt: 'Maison s+3 étudiants',
      line1: 'un maison s+3 pour les étudiants',
      line2: 'pour chaque\'un',
      price: '160dt'
    }
  ];
  w3_close() {
    console.log('Menu closed');
  }
  login(){
    console.log('Login clicked');
    this.router.navigate(['/loginn']);
  }
  pay(){
    console.log('Pay clicked');
    this.router.navigate(['/pay']);
  }
}
