import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { QuizzesFacade } from '@llp/features/quizzes/state';
import { LabelPosition, NewQuiz, NewQuizSchema, NewQuestionDto, NewFormQuestion, NewAnswerOption } from '@llp/models';
import { answerOptionsValidator, hasCorrectAnswerValidator } from '@llp/shared/validators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss'],
})
export class NewQuizComponent {
  newQuiz = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    questions: new FormGroup({}),
  });

  order = 0;
  formFinished = false;

  labelPosition = LabelPosition;

  constructor(private quizzesFacade: QuizzesFacade) {}

  addQuestionToForm() {
    this.newQuiz.controls.questions.addControl(uuidv4(), new FormGroup({
      label: new FormControl('', [Validators.required, Validators.minLength(5)]),
      order: new FormControl(this.order++),
      required: new FormControl(''),
      controlType: new FormControl('INPUT'),
      answerOptions: new FormGroup({}),
    },
    {
      validators: [
        answerOptionsValidator(2, 'Please add at least 2 option'),
        hasCorrectAnswerValidator(),
      ],
    }));
  }

  deleteQuestion(questionKey: string) {
    this.newQuiz.controls.questions.removeControl(questionKey);
  }

  saveQuiz() {
    this.newQuiz.markAllAsTouched();
    this.formFinished = true;

    const { title, description }  = this.newQuiz.value;
    const questions = this.mapFormQuestionToNewQuestionDto();

    if (title && description && questions) {
      const newQuiz: NewQuiz = {
        title,
        description,
        questions,
      }

      const result = NewQuizSchema.safeParse(newQuiz);

      if (result.success) this.quizzesFacade.createQuiz(newQuiz);
    }
  }

  mapFormQuestionToNewQuestionDto(): NewQuestionDto[] {
    const newQuestions: NewQuestionDto[] = [];
    const formQuestions = this.newQuiz.value.questions;

    if (!formQuestions) return [];

    const questionsValues = Object.entries(formQuestions);

    for (const [keyQuestion, question] of questionsValues) {
      const newQuestion = question as NewFormQuestion;

      const answerOptions: NewAnswerOption[] = Object.entries(newQuestion.answerOptions).map(([key, value]) => ({
        key,
        label: value.label,
        isCorrectAnswer: newQuestion.controlType === 'INPUT' ? true : value.isCorrectAnswer,
      }));

      newQuestions.push({
        ...newQuestion,
        key: keyQuestion,
        required: !!newQuestion.required,
        answerOptions: answerOptions,
      });
    }

    return newQuestions;
  }
}
