import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from '@llp/models';
import { ControlComponent } from '@llp/shared/utils/cva-component';

@Component({
  selector: 'llp-select-quiz-view',
  templateUrl: './select-quiz-view.component.html',
  styleUrls: ['./select-quiz-view.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectQuizViewComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectQuizViewComponent extends ControlComponent<string> {
  @Input()
  label = '';

  @Input()
  options: Option[] = [];

  @Input()
  placeholder = 'Select the appropriate option';

  isOptionsVisible = false;

  selectOption(option: Option) {
    this.value = option.key;
    this.toggleOptionVisibility();
  }

  toggleOptionVisibility() {
    this.isOptionsVisible = !this.isOptionsVisible;
  }

  get selectedOption(): string {
    if (!this.options?.length) return this.placeholder;
    return this.options.find(option => option.key === this.value)?.label || this.placeholder;
  }

  trackByFn(index: number, item: Option) {
    return item.key;
  }
}
