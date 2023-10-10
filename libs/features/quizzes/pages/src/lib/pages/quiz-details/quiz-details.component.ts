import { Component } from '@angular/core';
import { Answer, Question } from '@llp/models';

@Component({
  selector: 'llp-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent {
  questions: Question[] = [];

  saveForm(form: Answer[]) {
    console.log(form);
  }
}
