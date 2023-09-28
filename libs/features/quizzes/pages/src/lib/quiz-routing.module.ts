import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDetailsComponent } from './pages/quiz-details/quiz-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'list',
  //   pathMatch: 'full',
  // },
  //   {
  //   path: 'new',
  //   component: NewArticleComponent,
  //   data: { role: Role.Admin },
  //   canMatch: [UserRoleGuard]
  // },
  {
    path: '',
    component: QuizDetailsComponent,
    // children: [
    //   {
    //     path: 'list',
    //     component: ArticlesComponent,
    //   },
    //   {
    //     path: ':id',
    //     component: ArticleDetailsComponent,
    //   },
    //   {
    //     path: 'category/:id',
    //     component: CategoryArticlesComponent,
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
