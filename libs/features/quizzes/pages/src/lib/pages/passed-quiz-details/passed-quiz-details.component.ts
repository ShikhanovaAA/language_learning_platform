import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzesFacade } from '@llp/features/quizzes/state';

@Component({
  selector: 'llp-passed-quiz-details',
  templateUrl: './passed-quiz-details.component.html',
  styleUrls: ['./passed-quiz-details.component.scss'],
})
export class PassedQuizDetailsComponent implements OnInit {
  passedQuiz$ = this.quizzesFacade.passedQuiz$;

  quizId = +this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private quizzesFacade: QuizzesFacade,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizzesFacade.getPassedQuizById(+params['id']);
    });
  }
}
