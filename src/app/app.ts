import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TodoList } from "./todo/todo-list";

@Component({
  selector: 'app-root',
  imports: [IonicModule, TodoList],
  template: `
    <ion-app>
      
      <ion-header>
        <ion-toolbar>
          <ion-title>TODO</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content [forceOverscroll]="false" class="ion-padding">

        <app-todo-list/>

      </ion-content>

    </ion-app>
  `,
  styles: [``]
})
export class App {

}
