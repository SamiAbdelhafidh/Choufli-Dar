import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { DataServiceService } from '../../../../service/data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-binom',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './binom.component.html',
  styleUrl: './binom.component.css'
})
export class BinomComponent {
  cards = [1, 2]; // Two default cards

  addCard() {
    this.cards.push(this.cards.length + 1);
  }


  constructor(private router:Router,private fb: FormBuilder,private share:DataServiceService) { }
  requestForm!: FormGroup;
  ngOnInit() {
    this.requestForm = this.fb.group({
      name: [''],
      age: [''],
      location: [''],
      institute: [''],
      description: [''],
      share: [''],
      
  
    });
  
  }
  contact(){
    console.log('main clicked');
    this.router.navigate(['/btcont']);
  }
  onSubmit() {
    console.log(this.requestForm.value);
    this.share.binomemployee(this.requestForm.value).subscribe(
      (response:any) => {
        console.log('Student added successfully:', response);
        
        this.router.navigate(['/btcont']);
  
  
      },
      (error:any) => {
        console.error('Error adding student:', error);
        // Handle error, e.g., show an error message
      }
    );
    this.router.navigate(['/btcont']);
}

}