import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private ele: ElementRef) { }

  @HostListener("click")
  prevFunc() {
    var elem = this.ele.nativeElement.parentElement.parentElement.parentElement.children[0];
    
    var item = elem.getElementsByClassName("item");
    elem.prepend(item[item.length - 1])
    
  }

}
