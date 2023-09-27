import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputStyle } from '@llp/models';
import { ControlComponent } from '@llp/shared/utils/cva-component';

@Component({
  selector: 'llp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends ControlComponent<string> {
  @Input()
  width?: string;

  @Input()
  placeholder = '';

  @Input()
  inputStyle: InputStyle = InputStyle.Default;

  @Input()
  matIcon?: string;
}
