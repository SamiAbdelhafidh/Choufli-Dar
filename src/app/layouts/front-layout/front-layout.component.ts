import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-front-layout',
  imports: [CommonModule,RouterModule],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css',
  standalone:true,
  animations: [
    trigger('sidebarAnimation', [
      state('closed', style({ transform: 'translateX(-100%)' })),
      state('open', style({ transform: 'translateX(0)' })),
      transition('closed => open', [
        animate('300ms ease-in-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class FrontLayoutComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
