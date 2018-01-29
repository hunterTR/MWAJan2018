import { Component, OnInit, Input,Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter:number = 0;
  @Output() onCounterChanged: EventEmitter;
  constructor() {
    this.onCounterChanged = new EventEmitter();
   }

  increaseCounter(){
    this.counter++;
    this.onCounterChanged.emit(this.counter);
    return false;
  }

  decreaseCounter(){
    this.counter--;
    this.onCounterChanged.emit(this.counter);
    return false;
  }
  ngOnInit() {
  }

}
