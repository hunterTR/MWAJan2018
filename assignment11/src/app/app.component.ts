import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-counter [counter] = "componentCounterValue" (onCounterChanged)="counterChanged($event)"></app-counter>
  {{componentCounterValue}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCounterValue = 5;

  counterChanged(event)
  {
    console.log('value : ' + event);
    this.componentCounterValue = event;
  }
}
