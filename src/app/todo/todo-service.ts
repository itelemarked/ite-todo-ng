import { inject, Injectable, signal } from '@angular/core';

import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

import { FirebaseService } from '../core/firebase-service';

import { isTodo, Todo } from './types/Todo';
import { Identifiable, isIdentifiable } from './types/Identifiable';

@Injectable({ providedIn: 'root' })
export class TodoService {

  private firestore = inject(FirebaseService).firestore

  todos = signal< Identifiable<Todo>[] >([])
  errors = signal<string[]>([])

  constructor() {
    onSnapshot(collection(this.firestore, 'todos'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
      if(data.every(d => isTodo(d) && isIdentifiable(d))) {
        this.todos.set(data)
        this.errors.set([])
      }
      else {
        this.todos.set([])
        this.errors.set(['fetch-wrong-data-type'])
      }
    })
  }

  addTodo = async (todo: Todo) => {
    const docRef = await addDoc(collection(this.firestore, "todos"), todo)
    console.log("Document written with ID: ", docRef.id)
  }

  deleteTodo = async (uid: string) => {
    await deleteDoc(doc(this.firestore, 'todos', uid))
    console.log(`Todo with uid: ${uid} has been deleted`)
  }
}
