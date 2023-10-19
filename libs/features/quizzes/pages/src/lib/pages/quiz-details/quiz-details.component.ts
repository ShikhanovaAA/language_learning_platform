import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzesFacade } from '@llp/features/quizzes/state';
import { AnswerDto, AnswersDtoSchema, FormView, FormAnswer } from '@llp/models';

@Component({
  selector: 'llp-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit {
  selectedQuiz$ = this.quizzesFacade.selectedQuiz$;

  FormView = FormView;

  quizId = +this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private quizzesFacade: QuizzesFacade,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizzesFacade.getQuizById(+params['id']);
    });
  }

  saveForm(form: FormAnswer) {
    const answersDto = this.getAnswersDto(form);
    const schemaCheck = AnswersDtoSchema.safeParse(answersDto);

    if (!schemaCheck.success) return;

    this.quizzesFacade.saveQuizAnswers(answersDto);
  }

  private getAnswersDto(form: FormAnswer): AnswerDto[] {
    let answersDto: AnswerDto[] = [];
    const formAnswersArray = Object.entries(form);

    for (const [key, answer] of formAnswersArray) {
      const answerArray = answer.split(',');
      const answers = answerArray.map(answer => ({
        value: answer,
        answerOptionId: isNaN(Number(answer)) ? null : Number(answer),
        questionId: Number(key),
        quizId: this.quizId,
      }));

      answersDto = answersDto.concat(answers);
    }

    return answersDto;
  }
}
