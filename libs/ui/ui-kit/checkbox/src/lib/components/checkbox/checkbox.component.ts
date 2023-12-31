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

  checkedOptions: Option[] = this.checkedByValue;

  toggleOption(option: Option) {
    if (this.isChecked(option.key)) {
      this.checkedOptions = this.checkedOptions.filter(checkedOption => checkedOption.key !== option.key);
    } else {
      this.checkedOptions.push(option);
    }

    this.value = this.checkedOptions.map(option => option.key).join(',');
  }

  isChecked(key: Option['key']) {
    return this.checkedOptions.some(checkedOption => checkedOption.key === key);
  }

  get checkedByValue(): Option[] {
    if (!this.value) return [];

    const value = this.value.split(',');
    const found = this.options.filter(o => value.some(checkedOption => checkedOption === o.key));
    return found ? found : [];
  }

  trackByFn(index: number, option: Option) {
    return option.key;
  }
}
