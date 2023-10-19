import { mapResultToPassedQuiz } from './passed-quiz-mapper';
import { NewQuiz, Quiz, AnswerDto, AnswerWithCorrectAnswerDto, QuizDto, PassedQuiz, FormQuiz } from '@llp/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { mapQuizToFormQuiz } from './quiz-to-form-quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) {}

  createQuiz(newQuiz: NewQuiz): Observable<Quiz> {
    return this.httpClient.post<Quiz>('api/quizzes', newQuiz);
  }

  getAllQuizzes(): Observable<{quizzes: Quiz[], answers: AnswerWithCorrectAnswerDto[]}> {
    return this.httpClient.get<{quizzes: Quiz[], answers: AnswerWithCorrectAnswerDto[]}>('api/quizzes');
  }

  getQuizById(quizId: Quiz['id']): Observable<FormQuiz> {
    return this.httpClient.get<FormQuiz>(`api/quizzes/${quizId}`).pipe(
      map(quiz => mapQuizToFormQuiz(quiz)),
    );
  }

  saveQuizAnswers(quizAnswers: AnswerDto[]): Observable<AnswerDto[]> {
    return this.httpClient.post<AnswerDto[]>('api/quizzes/answers', quizAnswers);
  }

  getPassedQuizById(quizId: Quiz['id']): Observable<PassedQuiz> {
    return this.httpClient.get<{quiz: QuizDto, answers: AnswerWithCorrectAnswerDto[]}>(`api/quizzes/passed/${quizId}`).pipe(
      map(result => mapResultToPassedQuiz(result.quiz, result.answers)),
    );
  }
}
