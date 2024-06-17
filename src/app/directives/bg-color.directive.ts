import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appBgColor]',
})
export class BgColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor')
  bgColor = 'green';

  @HostListener('mouseenter')
  mouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
