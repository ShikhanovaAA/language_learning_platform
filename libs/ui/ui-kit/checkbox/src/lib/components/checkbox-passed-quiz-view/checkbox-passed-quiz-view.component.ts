import { Component, Input } from '@angular/core';
import { PassedQuizAnswerOption } from '@llp/models';

@Component({
  selector: 'llp-checkbox-passed-quiz-view',
  templateUrl: './checkbox-passed-quiz-view.component.html',
  styleUrls: ['./checkbox-passed-quiz-view.component.scss'],
})
export class CheckboxPassedQuizViewComponent {
  @Input()
  label = '';

  @Input()
  options: PassedQuizAnswerOption[] = [];

  @Input()
  userAnsweredCorrectly!: boolean;

  trackByFn(index: number, option: PassedQuizAnswerOption) {
    return option.key;
  }
}
