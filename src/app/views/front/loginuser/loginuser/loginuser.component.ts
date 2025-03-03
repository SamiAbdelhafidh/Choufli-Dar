import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthuserService } from '../../../services/authuser.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-loginuser',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css',
  standalone:true
})
export class LoginuserComponent implements OnInit {
   constructor(private aus:AuthuserService) { }
  
    ngOnInit(): void {    
    }
  
    login(ff: any) {
      let data=ff.value
      this.aus.login(data).subscribe(data=>console.log(data))
    }
}
