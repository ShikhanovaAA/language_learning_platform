import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '@llp/model';
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
  selectOptions: SelectOption[] = [];

  @Input()
  placeholder: string = 'Select...';

  isOptionsVisible = false;
  selectedOption!: SelectOption;

  onSelect(option: SelectOption) {
    this.selectedOption = option;
    this.value = option.value;
    this.toggleOptionVisibility();
  }

  toggleOptionVisibility() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }
}
