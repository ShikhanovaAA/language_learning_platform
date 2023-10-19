import { Component, OnInit } from '@angular/core';
import { QuizzesFacade } from '@llp/features/quizzes/state';
import { Quiz } from '@llp/models';

@Component({
  selector: 'llp-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
})
export class QuizListComponent implements OnInit {
  quizzes$ = this.quizzesFacade.quizzes$;

  constructor(private quizzesFacade: QuizzesFacade) {}

  ngOnInit(): void {
    this.quizzesFacade.getAllQuizzes();
  }

  trackByFn(index: number, quiz: Quiz) {
    return quiz.id;
  }
}
