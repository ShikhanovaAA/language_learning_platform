import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlType, Option, Question, QuestionControltypeUpdatingInfo, controlOptions, NewQuestion } from '@llp/models';

@Component({
  selector: 'llp-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss'],
})
export class DynamicFormBuilderComponent {
  _questions: NewQuestion[] = [];

  @Input()
  set questions (questions: NewQuestion[]) {
    this._questions = questions;
    this.updatedQuestions = questions.concat();
  }

  @Output() questionUpdated = new EventEmitter<NewQuestion[]>();
  @Output() questionControlTypeUpdated = new EventEmitter<QuestionControltypeUpdatingInfo>();
  @Output() questionDeleted = new EventEmitter<NewQuestion['key']>();

  updatedQuestions: NewQuestion[] = [];

  requiredOptions: Option[] =[{
    label: 'Required',
    key: 'required',
  }];

  controlOptions = controlOptions;

  changeQuestionControlType(controlType: string, questionKey: NewQuestion['key']) {
    this.questionControlTypeUpdated.emit({
      key: questionKey,
      controlType: controlType as ControlType
    });
  }

  updateQuestion(updatedFields: Partial<Question>, questionKey: NewQuestion['key']) {
    this.updatedQuestions = this.updatedQuestions.map(question => question.key === questionKey ? ({...question, ...updatedFields}) : question);
    this.questionUpdated.emit(this.updatedQuestions);
  }

  updateQuestionRequiredFieldQuestion() {
    this.questionUpdated.emit(this.updatedQuestions);
  }

  deleteQuestion(questionKey: NewQuestion['key']) {
    this.questionDeleted.emit(questionKey);
  }
}
