import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@llp/ui/components/main-layout';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'articles',
        loadChildren: () => import('@llp/features/article/pages').then((m) => m.ArticleModule),
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('@llp/features/auth/pages').then((m) => m.AuthPagesModule),
  },
  {
    path: 'dictionary',
    loadChildren: () => import('@llp/features/dictionary/pages').then((m) => m.DictionaryPagesModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
