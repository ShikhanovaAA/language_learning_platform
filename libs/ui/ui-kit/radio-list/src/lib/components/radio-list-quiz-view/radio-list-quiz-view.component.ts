import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlComponent } from '@llp/shared/utils/cva-component';
import { Option } from '@llp/models';

@Component({
  selector: 'llp-radio-list-quiz-view',
  templateUrl: './radio-list-quiz-view.component.html',
  styleUrls: ['./radio-list-quiz-view.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioListQuizViewComponent),
      multi: true,
    },
  ],
})
export class RadioListQuizViewComponent extends ControlComponent<string> {
  @Input()
  label = '';

  @Input()
  options: Option[] = [];

  selectedOption?: Option;

  valueChange(option: Option) {
    this.selectedOption = option;
    this.value = option.key;
  }

  trackByFn(index: number, option: Option) {
    return option.key;
  }
}
