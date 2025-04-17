import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-front-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.css',
  standalone: true,

})
export class FrontLayoutComponent implements OnInit, OnDestroy {
  isSidebarOpen = false;
  currentRoute!: string;
  private routeSubscription!: Subscription;
  public display = true;
  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to route changes
    this.routeSubscription = this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Extract the last segment of the URL
        this.currentRoute = event.url.split('/').pop() || '';
        console.log('Current Route Segment:', this.currentRoute);
        if (this.currentRoute === 'loginn' || this.currentRoute === 'sign') {
          this.display = false; // Hide sidebar when on the login page
        }
        else {
          this.display = true; // Show sidebar for other routes
        }
        console.log('Display:', this.display);
      });
  }

  ngOnDestroy() {
    // Cleanup subscription to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}