import { Component, Input } from '@angular/core';

@Component({
  selector: 'llp-select-passed-quiz-view',
  templateUrl: './select-passed-quiz-view.component.html',
  styleUrls: ['./select-passed-quiz-view.component.scss'],
})
export class SelectPassedQuizViewComponent {
  @Input()
  label = '';

  @Input()
  correctAnswer!: string;

  @Input()
  userAnswer!: string;

  @Input()
  userAnsweredCorrectly!: boolean;
}
