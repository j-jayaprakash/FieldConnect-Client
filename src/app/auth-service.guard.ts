import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FieldService } from './field.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceGuard implements CanActivate {

  constructor( private router: Router,private service:FieldService) {

  }
private loginStatus:any=sessionStorage.getItem("currentUser");

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isloggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}}); 
      return false;
    }
  }
}
