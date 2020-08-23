import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem: ElementRef){
    this.elem.nativeElement.style.textDecoration = 'line-through'
  }






}
