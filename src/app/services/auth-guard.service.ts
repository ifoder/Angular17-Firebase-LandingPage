import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
  mapToCanActivate,
} from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  private authService = inject(AuthService);
  router = inject(Router);
  localStorage = inject(StorageService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      route.data.role == 'notLoggined' &&
      this.authService.isLoggedIn() == true
    ) {
      window.alert('Access Denied, for notLoggined');
      this.router.navigate(['home']);
    }

    if (
      this.authService.isLoggedIn() !== true &&
      route.data.role !== 'notLoggined'
    ) {
      window.alert('Access Denied, login ');
      this.router.navigate(['login']);
    }

    if (route.data.role == 'admin' && !this.authService.isAdmin()) {
      window.alert('Access Denied, dont have permission');
      this.router.navigate(['/home']);
    }
    return true;
  }
}

// const route: Route = {
//   path: 'admin',
//   canActivate: mapToCanActivate([AuthGuardService]),
// };
