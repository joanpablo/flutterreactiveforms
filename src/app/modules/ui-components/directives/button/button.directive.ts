import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    if (!this.el.nativeElement.hasAttribute('role')) {
      this.el.nativeElement.setAttribute('role', 'button');
    }

    this.el.nativeElement.classList.add(
      'rounded-md',
      'bg-secondary',
      'text-onSecondary',
      'px-6',
      'py-3',
      'font-semibold',
      'shadow-sm',
      'no-underline',
    );
  }
}
