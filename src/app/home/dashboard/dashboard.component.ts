import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './../../services/authentication.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public userInfirmation:any;
  constructor(public authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.getUserInfirmation();
  }
  getUserInfirmation(){
    this.userInfirmation = JSON.parse(sessionStorage.getItem('userData'));
   
  }
  



}
