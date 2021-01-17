import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthenticationService} from './../services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authenticationService : AuthenticationService ,public router :Router){
  }

  canActivate( ){
    if(!this.authenticationService.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
