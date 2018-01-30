import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="increaseCounter()">+</button>
                {{counter}}
                <button (click)="decreaseCounter()">-</button>`
  })
export class CounterComponent implements OnInit {

  @Input() counter:number = 0;
  @Output() onCounterChanged: EventEmitter<number>;
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
