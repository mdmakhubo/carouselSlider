import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private ele: ElementRef) { }

  @HostListener("click")
  nextFunc() {
    var elem = this.ele.nativeElement.parentElement.parentElement.parentElement.children[0];
    
    var item = elem.getElementsByClassName("item");
    elem.append(item[0])
    
  }

}
