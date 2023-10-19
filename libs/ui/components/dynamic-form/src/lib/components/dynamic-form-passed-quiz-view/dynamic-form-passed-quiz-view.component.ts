import { Component, Input } from '@angular/core';
import { PassedQuizQuestion } from '@llp/models';

@Component({
  selector: 'llp-dynamic-form-passed-quiz-view',
  templateUrl: './dynamic-form-passed-quiz-view.component.html',
  styleUrls: ['./dynamic-form-passed-quiz-view.component.scss'],
})
export class DynamicFormPassedQuizViewComponent {
  @Input() questions: PassedQuizQuestion[] = [];

  trackByFn(index: number, question: PassedQuizQuestion) {
    return question.id;
  }
}
