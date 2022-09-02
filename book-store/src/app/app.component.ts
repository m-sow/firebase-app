import { Component } from '@angular/core';
import firebase from 'firebase/compat';
import initializeApp = firebase.initializeApp;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor() {
     const firebaseConfig = {
       apiKey: 'AIzaSyCbW7yMRBBxg3DyCujbz3Ljhtu9YjvHM6s',
       authDomain: 'book-store-12ac7.firebaseapp.com',
       projectId: 'book-store-12ac7',
       storageBucket: 'book-store-12ac7.appspot.com',
       messagingSenderId: '296869054098',
       appId: '1:296869054098:web:d0b413aa9e3f46558e084b',
       measurementId: 'G-XLSDN7Q04V'
     };

     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
   }
}
