import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective {

  @Input() elementToAdd:string;
  @Input() elementText:string;
  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('click') addElement(){
    const newElement = this.renderer.createElement(this.elementToAdd);
    const text = this.renderer.createText(this.elementText);

    this.renderer.appendChild(newElement,text);
    console.log(newElement);

    const pos = this.renderer.selectRootElement('article');
    this.renderer.appendChild(pos,newElement);
  }
}
