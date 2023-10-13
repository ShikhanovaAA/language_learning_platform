import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { LabelPosition } from '@llp/models';
import { answerOptionsValidator, correctAnswerValidator } from '@llp/shared/validators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss'],
})
export class NewQuizComponent {
  newQuiz = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl(''),
    questions: new FormGroup({}),
  });

  order = 0;
  formFinished = false;

  labelPosition = LabelPosition;

  addQuestionToForm() {
    this.newQuiz.controls.questions.addControl(uuidv4(), new FormGroup({
      label: new FormControl('', [Validators.required, Validators.minLength(5)]),
      order: new FormControl(this.order++),
      required: new FormControl(''),
      controlType: new FormControl('INPUT'),
      correctAnswer: new FormControl('', [correctAnswerValidator()]),
      answerOptions: new FormGroup({}),
    },{ validators: [answerOptionsValidator(2, 'Please add at least 2 option')] }));
  }

  deleteQuestion(questionKey: string) {
    this.newQuiz.controls.questions.removeControl(questionKey);
  }

  saveQuiz() {
    this.newQuiz.markAllAsTouched();
    this.formFinished = true;
  }
}
