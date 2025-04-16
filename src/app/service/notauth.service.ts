import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../../authservice.guard'; // Import the AuthService
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // Only run on the client side (browser environment)
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      

      // If the user is authenticated
      if (this.authService.isAuthenticated()) {
        // If the user is an admin, redirect them to the admin page
          // If the user is not an admin, redirect to the home page
          this.router.navigate(['/main']);
        }
        return true; // Prevent access to the current route
      }
    

    return false; 
  }
}
