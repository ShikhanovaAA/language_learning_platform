import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlComponent } from '@llp/shared/utils/cva-component';
import { Option } from '@llp/models';

@Component({
  selector: 'llp-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends ControlComponent<string> {
  @Input()
  label = '';

  @Input()
  options: Option[] = [];

  checkedOptions: Option[] = [];

  toggleOption(option: Option) {
    if (this.isChecked(option.value)) {
      this.checkedOptions = this.checkedOptions.filter(checkedOption => checkedOption.value !== option.value);
    } else {
      this.checkedOptions.push(option);
    }

    this.value = this.checkedOptions.map(option => option.value).join(',');
  }

  isChecked(value: Option['value']) {
    return this.checkedOptions.some(checkedOption => checkedOption.value === value);
  }
}
