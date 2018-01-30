import { Directive,Input,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  colors:string[] = ['green','blue','red','yellow','orange']
  counter:number = 0;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onMouseClick() {
    this.changeColor();
  }

  changeColor(){
    console.log('changing color');
    this.renderer.setStyle(this.element.nativeElement,'color',this.colors[this.counter % this.colors.length])
    this.counter++;
  }
}
