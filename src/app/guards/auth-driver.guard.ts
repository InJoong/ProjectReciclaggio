import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthDriverService } from '../services/auth-driver.service';
import { tap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthDriverGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthDriverService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAuthenticated$.pipe(
      tap((loggedIn) => {
        if(!loggedIn){
          console.log("Hola1");
          this.router.navigateByUrl('/');
        }
      })
    );
  }
  
}
