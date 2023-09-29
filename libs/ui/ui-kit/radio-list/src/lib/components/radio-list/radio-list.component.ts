import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlComponent } from '@llp/shared/utils/cva-component';
import { Option } from '@llp/models';

@Component({
  selector: 'llp-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioListComponent),
      multi: true,
    },
  ],
})
export class RadioListComponent extends ControlComponent<string> {
  @Input()
  label = '';

  @Input()
  options: Option[] = [];

  selectedOption?: Option;

  valueChange(option: Option) {
    this.selectedOption = option;
    this.value = option.key;
  }
}
