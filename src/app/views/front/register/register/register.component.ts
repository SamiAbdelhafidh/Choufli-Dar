import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthuserService } from '../../../services/authuser.service';

@Component({
  selector: 'app-register',
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private aus:AuthuserService) { }

  ngOnInit(): void {    
  }

  register(f: NgForm) {
    let data=f.value
    this.aus.register(data).subscribe(data=>console.log(data))
  }
  

}
