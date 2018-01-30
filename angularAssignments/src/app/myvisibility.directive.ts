import { Directive,Input,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('appMyvisibility') visibility: boolean;
  constructor(private element: ElementRef, private renderer:Renderer2) { 
  
  }
  ngOnInit(){
    if(this.visibility == false)
    {
      this.renderer.setStyle(this.element.nativeElement,'visibility','hidden');
    }
    console.log(this.visibility);
  }

}
