import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../../authservice.guard'; // Import the AuthService
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    // Only proceed if we are running on the client side (browser environment)
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      

        if (!this.authService.isAuthenticated()) {
          this.router.navigate(['/loginn']); // Navigate to login page
          return false; // Prevent navigation to the protected route
        }
        return true; // Allow navigation if authenticated
      
    }
        this.router.navigate(['/loginn']);
        return false; // Prevent navigation
      }

}
