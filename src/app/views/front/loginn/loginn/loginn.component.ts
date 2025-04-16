import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataServiceService } from '../../../../service/data.service';

@Component({
  selector: 'app-loginn',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css'
})
export class LoginnComponent {
  requestForm!: FormGroup;

constructor(private router:Router,private fb: FormBuilder,private share:DataServiceService) { }
ngOnInit() {
  this.requestForm = this.fb.group({
    email: [''],
    password: [''],
    

  });

}
proprietaire(){
  console.log('main clicked');
  this.router.navigate(['/main']);
}
onSubmit() {
  console.log(this.requestForm.value);
  this.share.loginemployee(this.requestForm.value).subscribe(
    (response:any) => {
      console.log('Student added successfully:', response);
      localStorage.setItem('token', response.token);
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
