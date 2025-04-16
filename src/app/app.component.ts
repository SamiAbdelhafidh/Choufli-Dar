import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontLayoutComponent } from "./layouts/front-layout/front-layout.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChoufliDarr';

}
