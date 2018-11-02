import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseover') mOver(){
    this.renderer.addClass(this.el.nativeElement,'rotate');
    this.renderer.setProperty(this.el.nativeElement,'font-color','red');
    console.log('mover called ');
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseout') mOut(){
    this.renderer.removeClass(this.el.nativeElement,'rotate');
console.log('mout called');
console.log(this.el.nativeElement);

  }

}
