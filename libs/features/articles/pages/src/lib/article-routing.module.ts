import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UserRoleGuard } from '@llp/shared/guards';
import { Role } from '@llp/models';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleLayoutComponent } from './components/article-layout/article-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'new',
    component: NewArticleComponent,
    data: { role: Role.Admin },
    canMatch: [UserRoleGuard],
  },
  {
    path: '',
    component: ArticleLayoutComponent,
    children: [
      {
        path: 'list',
        component: ArticlesComponent,
      },
      {
        path: ':id',
        component: ArticleDetailsComponent,
      },
      {
        path: 'category/:id',
        component: CategoryArticlesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
