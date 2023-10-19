import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputStyle } from '@llp/models';
import { ControlComponent } from '@llp/shared/utils/cva-component';

@Component({
  selector: 'llp-input-quiz-view',
  templateUrl: './input-quiz-view.component.html',
  styleUrls: ['./input-quiz-view.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputQuizViewComponent),
      multi: true,
    },
  ],
})
export class InputQuizViewComponent extends ControlComponent<string> {
  @Input({ required: true }) label?: string;

  @Input()
  placeholder = 'Your Answer';

  @Input()
  inputStyle: InputStyle = InputStyle.Default;
}
