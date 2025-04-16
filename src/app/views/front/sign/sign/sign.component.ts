import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../../service/data.service';

@Component({
  selector: 'app-sign',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
    requestForm!: FormGroup;
  
  constructor(private router:Router,private fb: FormBuilder,private share:DataServiceService) { }
  main(){
    console.log('main clicked');
    this.router.navigate(['/main']);
  }
  ngOnInit() {
    this.requestForm = this.fb.group({
      email: [''],
      password: [''],
      firstname: [''],
      lastname: [''],
  
    });
  
  }
  onSubmit() {
    console.log(this.requestForm.value);
    this.share.addNewStudent(this.requestForm.value).subscribe(
      (response:any) => {
        console.log('Student added successfully:', response);
      },
      (error:any) => {
        console.error('Error adding student:', error);
        // Handle error, e.g., show an error message
      }
    );
   }
}
