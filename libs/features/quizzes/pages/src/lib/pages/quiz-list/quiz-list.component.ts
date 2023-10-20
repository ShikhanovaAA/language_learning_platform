import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@llp/features/auth/state';
import { QuizzesFacade } from '@llp/features/quizzes/state';
import { Quiz } from '@llp/models';

@Component({
  selector: 'llp-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  quizzes$ = this.quizzesFacade.quizzes$;
  user$ = this.authFacade.user$;

  constructor(
    private quizzesFacade: QuizzesFacade,
    private authFacade: AuthFacade,
  ) {}

  ngOnInit(): void {
    this.quizzesFacade.getAllQuizzes();
  }

  trackByFn(index: number, quiz: Quiz) {
    return quiz.id;
  }
}
