import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) {
    this.isAuth = false;
  }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user){
          this.isAuth = true;
        }else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut(){
    this.authService.signOutUser();
  }

}
