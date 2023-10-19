import { Component, Input } from '@angular/core';

@Component({
  selector: 'llp-input-passed-quiz-view',
  templateUrl: './input-passed-quiz-view.component.html',
  styleUrls: ['./input-passed-quiz-view.component.scss'],
})
export class InputPassedQuizViewComponent {
  @Input({ required: true }) label?: string;

  @Input()
  value = 'Your Answer';

  @Input()
  correctAnswer!: string;

  @Input()
  userAnsweredCorrectly!: boolean;
}
