import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): Observable<boolean>| Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          user => {
            if (user){
              resolve(true);
            }else {
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
          }
        );
      }
    );
  }
}
