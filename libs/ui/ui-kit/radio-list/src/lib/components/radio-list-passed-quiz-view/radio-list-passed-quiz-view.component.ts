import { Component, Input } from '@angular/core';
import { PassedQuizAnswerOption } from '@llp/models';

@Component({
  selector: 'llp-radio-list-passed-quiz-view',
  templateUrl: './radio-list-passed-quiz-view.component.html',
  styleUrls: ['./radio-list-passed-quiz-view.component.scss'],
})
export class RadioListPassedQuizViewComponent {
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
