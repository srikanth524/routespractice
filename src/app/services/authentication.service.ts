import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  public isAuthenticated() {
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  public async logIn(userData) {
    const reponseData = {
      email: userData.email,
      token: '8rejfe9eje9j',
    };
    await sessionStorage.setItem('userData', JSON.stringify(reponseData));
    return true;
  }
  public signUp() {}
  public logOut() {
    sessionStorage.clear();
    return true;
  }
}
