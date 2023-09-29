import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlType, Option, Question, QuestionControltypeUpdatingInfo, controlOptions } from '@llp/models';

@Component({
  selector: 'llp-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss'],
})
export class DynamicFormBuilderComponent {
  _questions: Question[] = [];

  @Input()
  set questions (questions: Question[]) {
    this._questions = questions;
    this.updatedQuestions = questions.concat();
  }

  @Output() questionUpdated = new EventEmitter<Question[]>();
  @Output() questionControlTypeUpdated = new EventEmitter<QuestionControltypeUpdatingInfo>();
  @Output() questionDeleted = new EventEmitter<Question['key']>();

  updatedQuestions: Question[] = [];

  requiredOptions: Option[] =[{
    label: 'Required',
    key: 'required',
  }];

  controlOptions = controlOptions;

  changeQuestionControlType(controlType: string, questionKey: Question['key']) {
    this.questionControlTypeUpdated.emit({
      key: questionKey,
      controlType: controlType as ControlType
    });
  }

  updateQuestion(updatedFields: Partial<Question>, questionKey: Question['key']) {
    this.updatedQuestions = this.updatedQuestions.map(question => question.key === questionKey ? ({...question, ...updatedFields}) : question);
    this.questionUpdated.emit(this.updatedQuestions);
  }

  updateQuestionRequiredFieldQuestion() {
    this.questionUpdated.emit(this.updatedQuestions);
  }

  deleteQuestion(questionKey: Question['key']) {
    this.questionDeleted.emit(questionKey);
  }
}
