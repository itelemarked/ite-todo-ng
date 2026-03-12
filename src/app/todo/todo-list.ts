import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TodoService } from './todo-service';
import { Todo } from './types/Todo';


let todosToAdd: Todo[] = [
    { title: 'todo 1', completed: true },
    { title: 'todo 2', completed: true },
    { title: 'todo 3', completed: true },
    { title: 'todo 4', completed: true },
    { title: 'todo 5', completed: true },
    { title: 'todo 6', completed: true },
    { title: 'todo 7', completed: true },
    { title: 'todo 8', completed: true },
    { title: 'todo 9', completed: true }
]


@Component({
  selector: 'app-todo-list',
  imports: [IonicModule],
  template: `
    @for (todo of todos(); track todo.uid) {
      <div style="border: 1px solid grey; margin: 10px; padding: 10px; display: flex; align-items: center;">
        <div style="width: 80%; font-size: 0.8em;">
          uid: {{ todo.uid }} <br />
          title: {{ todo.title }} <br />
          completed: {{ todo.completed }}
        </div>
        <div style="text-align: right;">
            <ion-button size="small">Edit</ion-button> <br>
            <ion-button size="small" color="danger" (click)="onDeleteTodo(todo.uid)">Delete</ion-button>
        </div>
      </div>
    }

    @if (errors().length > 0) {
      @for (error of errors(); track error) {
        <div style="font-size: 0.8em; padding: 10px;">
          <ion-text color="danger">{{ error }}</ion-text>
        </div>
      }
    }

    <ion-button (click)="onAddTodo()" expand="block" size="small">addTodo</ion-button>
  `,
  styles: [``],
})
export class TodoList {
  // DEPENDENCIES
  private todoService = inject(TodoService);

  // STATE
  protected todos = this.todoService.todos;
  protected errors = this.todoService.errors;

  // SELECTORS

  // ACTIONS
  constructor() {}

  protected onAddTodo = () => {
    this.todoService.addTodo(todosToAdd[0])
    todosToAdd = todosToAdd.filter((_, idx) => idx !== 0)
  }

  protected onDeleteTodo = (uid: string) => {
    this.todoService.deleteTodo(uid)
  }

  // PRIVATE
}
