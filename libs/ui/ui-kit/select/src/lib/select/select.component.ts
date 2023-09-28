import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from '@llp/models';
import { ControlComponent } from '@llp/shared/utils/cva-component';

@Component({
  selector: 'llp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent extends ControlComponent<string> {
  @Input()
  label = '';

  @Input()
  selectOptions: Option[] = [];

  @Input()
  placeholder: string = 'Select...';

  isOptionsVisible = false;
  selectedOption!: Option;

  onSelect(option: Option) {
    this.selectedOption = option;
    this.value = option.value;
    this.toggleOptionVisibility();
  }

  toggleOptionVisibility() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }
}
