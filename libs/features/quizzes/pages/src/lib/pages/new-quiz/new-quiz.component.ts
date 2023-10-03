import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { LabelPosition, NewQuestion, QuestionControltypeUpdatingInfo} from '@llp/models';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'llp-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss'],
})
export class NewQuizComponent {
  newQuiz = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  questions: NewQuestion[] = [];
  updatedQuestions: NewQuestion[] = [];

  order = 0;
  labelPosition = LabelPosition;

  saveQuiz() {
    console.log(this.updatedQuestions);
  }

  updateQuestions(questions: NewQuestion[]) {
    this.updatedQuestions = questions.concat();
  }

  addQuestion() {
    this.questions = this.updatedQuestions.concat({
      key: uuidv4(),
      label: '',
      order: ++this.order,
      required: '',
      controlType: 'CHECKBOX',
      correctAnswer: null,
    });

    this.updatedQuestions = this.questions.concat();
  }

  updateQuestionControlType(questionUpdatingInfo: QuestionControltypeUpdatingInfo) {
    this.questions = this.updatedQuestions.map(question => question.key === questionUpdatingInfo.key
      ? ({...question, controlType: questionUpdatingInfo.controlType})
      : question
    );
    this.updatedQuestions = this.questions.concat();
  }

  deleteQuestion(questionKey: string) {
    this.questions = this.updatedQuestions.filter(question => question.key !== questionKey);

    this.updatedQuestions = this.questions.concat();
  }
}
