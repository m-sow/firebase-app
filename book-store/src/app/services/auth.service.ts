import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(
            (res) => {
              resolve(res);
            },
            (error) => {
              reject(error);
            }
          );
      }
    );
  }

  signInUser(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
            (res) => {
              resolve(res);
            },
            (error) => {
              reject(error);
            }
          );
      }
    );
  }

  signOutUser(){
    firebase.auth().signOut();
  }
}
