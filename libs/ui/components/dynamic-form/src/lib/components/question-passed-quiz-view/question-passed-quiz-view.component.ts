import { Component, Input } from '@angular/core';
import { PassedQuizQuestion } from '@llp/models';

@Component({
  selector: 'llp-question-passed-quiz-view',
  templateUrl: './question-passed-quiz-view.component.html',
  styleUrls: ['./question-passed-quiz-view.component.scss'],
})
export class QuestionPassedQuizViewComponent {
  @Input() question!: PassedQuizQuestion;
}
