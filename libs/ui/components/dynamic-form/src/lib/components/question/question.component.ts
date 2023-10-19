import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabelPosition, Question } from '@llp/models';

@Component({
  selector: 'llp-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() form!: FormGroup;
  @Input() labelPosition: LabelPosition = LabelPosition.Top;
}
