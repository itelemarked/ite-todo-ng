import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [IonicModule],
  template: `
    <ion-app>
      
      <ion-header>
        <ion-toolbar>
          <ion-title>TODO</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content [forceOverscroll]="false" class="ion-padding">
        <h1>App works!</h1>
        <ion-button>btn</ion-button>
      </ion-content>

    </ion-app>
  `,
  styles: [``]
})
export class App {
  
}
