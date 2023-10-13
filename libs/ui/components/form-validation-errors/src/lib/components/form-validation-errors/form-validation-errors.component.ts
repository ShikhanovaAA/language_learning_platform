import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidationError } from '../../models/validation-error';

@Component({
  selector: 'llp-form-validation-errors',
  templateUrl: './form-validation-errors.component.html',
  styleUrls: ['./form-validation-errors.component.scss'],
})
export class FormFalidationErrorsComponent {
  @Input({ required: true })
  show!: boolean;

  @Input({ required: true })
  control!: AbstractControl;

  @Input({ required: true })
  errors!: ValidationErrors | null;

  get errorKeys(): ValidationError[] {
    return this.errors ? Object.entries(this.errors) : [];
  }

  trackByFn(index: number, error: ValidationError) {
    return error[0];
  }
}
