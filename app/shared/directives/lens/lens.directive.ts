import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLens]'
})
export class LensDirective {

  @HostListener('mousenter') onMouseEnter(){
    
  }

  @HostListener('mouseleave') onMouseLeave(){
    
  }
}
