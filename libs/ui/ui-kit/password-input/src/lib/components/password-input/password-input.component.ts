import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputStyle } from '@llp/models';
import { ControlComponent } from '@llp/shared/utils/cva-component';

@Component({
  selector: 'llp-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent extends ControlComponent<string> {
  @Input()
  width?: string;

  @Input()
  placeholder = '';

  @Input()
  inputStyle: InputStyle = InputStyle.Default;

  @Input()
  matIcon?: string;

  @Input()
  autocomplete?: string;

  @Input()
  small = false;

  @Input()
  readonly = false;

  @Input()
  disabled?: boolean = false;

  hidePassword = true;
}
