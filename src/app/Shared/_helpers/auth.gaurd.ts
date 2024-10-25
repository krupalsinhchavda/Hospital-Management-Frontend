import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = JSON.parse(localStorage.getItem('currentAdmin') || '{}').token;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        else {
            this.router.navigate(['/auth/login']);
            return false;
        }
        // not logged in so redirect to login page with the return url
    }
}