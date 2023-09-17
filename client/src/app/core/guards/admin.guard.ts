import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/auth/user.service';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private _snack: MatSnackBar,
    private _auth: UserService,
    private _router: Router,
    private _cookie: CookieService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      if (this._cookie.get('user')) {
        this._auth.get().subscribe((res) => {
          if (res.role === 'admin') {
            console.log('true');
            resolve(true);
          } else {
            console.log('false');
            this._snack.open('You are not an Admin.', 'X', { duration: 3000 });
            this._router.navigate(['/']);
            resolve(false);
          }
        });
      } else {
        this._snack.open('You are not logged in.', 'X', {
          duration: 3000,
        });
        this._router.navigate(['/']);
        resolve(false);
      }
    });
  }
}
