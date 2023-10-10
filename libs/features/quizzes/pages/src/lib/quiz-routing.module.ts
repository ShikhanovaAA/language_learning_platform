import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDetailsComponent } from './pages/quiz-details/quiz-details.component';
import { NewQuizComponent } from './pages/new-quiz/new-quiz.component';
import { Role } from '@llp/models';
import { UserRoleGuard } from '@llp/util/guards';

const routes: Routes = [
  {
    path: 'new',
    component: NewQuizComponent,
    data: { role: Role.Admin },
    canMatch: [UserRoleGuard],
  },
  {
    path: '',
    component: QuizDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
