import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { getErrorMessage, ValidationErrorKey } from './mapValidationErrorToMessage';

@Directive({
  selector: '[llpShowControlErrors]',
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

  @HostBinding('class.has-errors') get hasError() {
    if (this.control && this.control.invalid && this.control.touched) {
      this.showErrors();
    } else {
      this.removeErrorHint();
    }

    return this.control.invalid;
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
    const messages = Object.entries(errors).map(([key, value]) => getErrorMessage(<ValidationErrorKey>key, value));
    const errorMessages = this.renderer.createText(messages.join(', '));

    const newTooltip = this.renderer.createElement('div');
    this.renderer.addClass(newTooltip, 'error-tooltip');

    this.renderer.appendChild(newTooltip, errorMessages);
    this.renderer.appendChild(this.elementRef.nativeElement, newTooltip);
  }

  removeErrorHint() {
    const tooltips: NodeList = this.elementRef.nativeElement.querySelectorAll('.error-tooltip');

    if (!tooltips) return;

    tooltips.forEach(tooltip => {
      this.renderer.removeChild(this.elementRef.nativeElement, tooltip);
    });
  }
}
