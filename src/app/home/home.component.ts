import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './../services/authentication.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authenticationService:AuthenticationService,public router:Router) { }

  ngOnInit(): void {
  }
  logOutMethod(){
    if(this.authenticationService.logOut()){
      this.router.navigate(['/login']);
    }
  }

}
