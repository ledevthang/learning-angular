import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') hover2() {
    this.name('yellow');
  }

  @HostListener('mouseleave') hover() {
    this.name('');
  }

  private name(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
