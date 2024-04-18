import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBobita]',
  standalone: true,
})
export class BobitaDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor('yellow');
  }
  private bgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor('');
  }
}
