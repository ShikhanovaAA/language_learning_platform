import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { mapValidationErrorToMessage, ValidationErrorKey } from './mapValidationErrorToMessage';

@Directive({
  selector: '[llpControlErrors]',
})
export class FormControlErrorsDirective {
  @Input() control!: AbstractControl;

  lostFocus?: boolean;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener("focusout") onBlur() {
    this.lostFocus = true;
    this.showErrors();
  }

  @HostListener('window:keyup') onMouseEnter() {
    if (!this.lostFocus) return;
    this.showErrors();
  }

  showErrors() {
    if (this.control && this.control.invalid) {
      const errors = this.control.errors;

      if (!errors) return;

      this.removeErrorHint();
      this.addErrorHint(errors);
    } else {
      this.removeErrorHint();
    }
  }

  addErrorHint(errors: ValidationErrors) {
    const messages = Object.keys(errors).map(key => mapValidationErrorToMessage[key as ValidationErrorKey]);
    const errorMessages = this.renderer.createText(messages.join(', '));

    const newTooltip = this.renderer.createElement('div');
    this.renderer.addClass(newTooltip, 'error-tooltip');

    this.renderer.appendChild(newTooltip, errorMessages);
    this.renderer.appendChild(this.elementRef.nativeElement, newTooltip);
  }

  removeErrorHint() {
    const tooltip = this.elementRef.nativeElement.querySelector('.error-tooltip');
    if (!tooltip) return;

    this.renderer.removeChild(this.elementRef.nativeElement, tooltip);
  }
}
