import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,private _router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean{
    if(!this.authService.isAuthenticated()){
      this._router.navigate(['/user']);
      return false;
    }
    else{
      return true;
    }
  }



}