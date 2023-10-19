import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '@llp/models';

@Component({
  selector: 'llp-question-quiz-view',
  templateUrl: './question-quiz-view.component.html',
  styleUrls: ['./question-quiz-view.component.scss'],
})
export class QuestionQuizViewComponent {
  @Input() question!: Question;
  @Input() form!: FormGroup;
}
