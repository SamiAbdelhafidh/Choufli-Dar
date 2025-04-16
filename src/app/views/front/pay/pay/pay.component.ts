import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataServiceService } from '../../../../service/data.service';

@Component({
  selector: 'app-pay',
  imports: [ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})

export class PayComponent {
  requestForm!: FormGroup;

constructor(private router:Router,private fb: FormBuilder,private share:DataServiceService) { }
ngOnInit() {
  this.requestForm = this.fb.group({
    card: [''],
    month: [''],
    annee: [''],
    security: [''],
    name: [''],
    email: [''],
    montant: [''],
    
    

  });

}
proprietaire(){
  console.log('main clicked');
  this.router.navigate(['/main']);
}

moisList: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
anneeList: number[] = [2025, 2026, 2027, 2028, 2029];

pay() {
  // Ici tu ajoutes le traitement du paiement
  console.log("Form submitted !");
}


onSubmit() {
  console.log(this.requestForm.value);
  this.share.payemployee(this.requestForm.value).subscribe(
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
