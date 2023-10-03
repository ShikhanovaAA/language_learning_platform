import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditableQuestionFields, NewQuestion } from '@llp/models';

@Component({
  selector: 'llp-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.scss'],
})
export class QuestionBuilderComponent {
  @Input() question!: NewQuestion;

  @Output() questionUpdated = new EventEmitter<EditableQuestionFields>();

  updateQuestion(fields: EditableQuestionFields) {
    this.questionUpdated.emit(fields);
  }
}
