import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './../../services/authentication.service'
import{Router} from '@angular/router'
import { BehaviorSubject, ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData={
    "email":"",
    "password":""
  }
  behaviourSubVar;
  constructor(public authenticationService:AuthenticationService,
    public router:Router) { }

  ngOnInit(): void {
    this.behaviourSubVar = new ReplaySubject(2);
 
    this.behaviourSubVar.next('1');
    this.behaviourSubVar.next('2');
    this.behaviourSubVar.subscribe(response => {
      console.log('Subscriber: 1' , response);
    });
    this.behaviourSubVar.next('2.5');
    this.behaviourSubVar.next(3)
    this.behaviourSubVar.subscribe(response=>{
      console.log('Subscriber 2: ', response)
    }); 
    this.behaviourSubVar.next(4)
    this.behaviourSubVar.next(5)

  }
  logInMethod(){
    if(this.userData.email && this.userData.password){
    if(this.authenticationService.logIn(this.userData)){
    this.router.navigate(['']);
    }
    return true;
    }else{
      return false;
    }
    console.log(this.userData);
  }

}
