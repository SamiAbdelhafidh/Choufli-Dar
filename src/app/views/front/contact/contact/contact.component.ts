import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthuserService } from '../../../services/authuser.service';

@Component({
  selector: 'app-contact',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone:true
})
export class ContactComponent implements OnInit {
   constructor(private aus:AuthuserService) { }
  
    ngOnInit(): void {    
    }
  
   // contact(f: any) {
     // let data=f.value
    //  this.aus.contact(data).subscribe(data=>console.log(data))

  
   // }
}
