import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthenticationService} from './../services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public authenticationService : AuthenticationService ,public router :Router){
  }

  canActivate( ){
    if(this.authenticationService.isAuthenticated()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}