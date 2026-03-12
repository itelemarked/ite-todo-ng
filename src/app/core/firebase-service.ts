import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAP7cEDguAxZlFQAh88r7R3ApNC3RXdW-Y',
  authDomain: 'ite-todo-f9e2c.firebaseapp.com',
  databaseURL: 'https://ite-todo-f9e2c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ite-todo-f9e2c',
  storageBucket: 'ite-todo-f9e2c.firebasestorage.app',
  messagingSenderId: '172881690257',
  appId: '1:172881690257:web:c01998927a788abcf58930',
};

@Injectable({ providedIn: 'root' })
export class FirebaseService {

  private readonly _app = initializeApp(firebaseConfig)
  private readonly _firestore = getFirestore(this._app)

  get firestore() {
    return this._firestore
  }

}
