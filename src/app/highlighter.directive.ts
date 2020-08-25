import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Directive({
  selector: '[appHighlighter]',
  host : {'[class.true]': 'select()'}
    
  
})
export class HighlighterDirective {

private el:ElementRef;
constructor(el:ElementRef){
  this.el = el;
} 

@Input ()
elements;


select(){
  this.elements.forEach(elt => {
    elt.unselect();
    
  });

  this.el.nativeElement.style.color = 'blue'

}

unselect() {
  this.el.nativeElement.style.color = 'black'
}



}
