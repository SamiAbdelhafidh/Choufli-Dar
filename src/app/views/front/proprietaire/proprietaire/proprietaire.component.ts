import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataServiceService } from '../../../../service/data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-proprietaire',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './proprietaire.component.html',
  styleUrl: './proprietaire.component.css'
})
export class ProprietaireComponent {
  requestForm!: FormGroup;
constructor(private router:Router,private fb: FormBuilder,private share:DataServiceService) { }
ngOnInit() {
  this.requestForm = this.fb.group({
    cin: [''],
    price: [''],
    surface: [''],
    description: [''],
    date: [''],
    room: [''],
    phone: [''],
    city: [''],
    

  });
}
  about(){
  console.log('main clicked');
  this.router.navigate(['/main']);
}
 

onSubmit() {
  console.log(this.requestForm.value);
  this.share.prpemployee(this.requestForm.value).subscribe(
    (response:any) => {
      console.log('Student added successfully:', response);
      
      this.router.navigate(['/main']);


    },
    (error:any) => {
      console.error('Error adding student:', error);
      // Handle error, e.g., show an error message
    }
  );
  this.router.navigate(['/main']);
}
}
