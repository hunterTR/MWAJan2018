import { Component } from '@angular/core';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
