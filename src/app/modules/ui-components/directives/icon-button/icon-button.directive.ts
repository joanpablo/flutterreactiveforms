import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIconButton]',
})
export class IconButtonDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    if (!this.el.nativeElement.hasAttribute('role')) {
      this.el.nativeElement.setAttribute('role', 'button');
    }

    this.el.nativeElement.classList.add(
      'h-9',
      'w-9',
      'text-onSurface',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
    );
  }
}
