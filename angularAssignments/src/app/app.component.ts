import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h2> Angular Assignment 1 </h2>
  <app-counter [counter] = "componentCounterValue" (onCounterChanged)="counterChanged($event)"></app-counter> 
  <br>
  Counter Component : {{componentCounterValue}}  

  <h2> Angular Assignment 2 </h2>
  <!-- angular assignment  2 -->
  <ul>
  <li appUpper> test </li>
  </ul>


  <p> there is a hidden value under me. </p>
  <p [appMyvisibility] = "false" > hidden value </p>


  <h3 appMycolor> CLICK ME I Am a color changing component <h3>


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
