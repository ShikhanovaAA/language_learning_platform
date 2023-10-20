import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuizComponent } from './pages/new-quiz/new-quiz.component';
import { Role } from '@llp/models';
import { UserRoleGuard } from '@llp/shared/guards';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './pages/quiz-details/quiz-details.component';
import { PassedQuizDetailsComponent } from './pages/passed-quiz-details/passed-quiz-details.component';
import { QuizLayoutComponent } from './components/quiz-layout/quiz-layout.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewQuizComponent,
    data: { role: Role.Admin },
    canMatch: [UserRoleGuard],
  },
  {
    path: ':id',
    component: QuizDetailsComponent,
    data: { role: Role.User },
    canMatch: [UserRoleGuard],
  },
  {
    path: '',
    component: QuizLayoutComponent,
    children: [
      {
        path: '',
        component: QuizListComponent,
      },
      {
        path: 'passed/:id',
        component: PassedQuizDetailsComponent,
        data: { role: Role.User },
        canMatch: [UserRoleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
