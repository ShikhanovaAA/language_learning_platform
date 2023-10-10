import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, tap } from 'rxjs';
import { ArticleService } from '@llp/features/articles/data-access';
import * as ArticleActions from './article.actions';
import { GeneralLoadingService } from '@llp/shared/services';
import { ToastNotificationService } from '@llp/ui/ui-kit/toast-notification';
import { Router } from '@angular/router';

@Injectable()
export class ArticleEffects {
  private actions$ = inject(Actions);

  constructor(
    private articleService: ArticleService,
    private generalLoadingService: GeneralLoadingService,
    private notificationService: ToastNotificationService,
    private router: Router,
  ) {}

  loadAllArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.GetArticles),
      switchMap(() => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.getAllArticles().pipe(
          switchMap(articles => [ArticleActions.GetArticlesSuccess({ articles })]),
          catchError(error =>  of(ArticleActions.GetArticlesFail(error))),
        );
      }),
    ),
  );

  loadAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.GetCategories),
      switchMap(() => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.getAllCategories().pipe(
          switchMap(categories => [ArticleActions.GetCategoriesSuccess({ categories })]),
          catchError(error => of(ArticleActions.GetCategoriesFail(error))),
        );
      }),
    ),
  );

  loadArticlesByCategoryId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.GetArticlesByCategoryId),
      switchMap(({ categoryId }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.getArticlesByCategoryId(categoryId).pipe(
          switchMap(articles => [ArticleActions.GetArticlesByCategoryIdSuccess({ articles })]),
          catchError(error => of(ArticleActions.GetArticlesByCategoryIdFail(error))),
        );
      }),
    ),
  );

  loadArticleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.GetArticleById),
      switchMap(({ articleId }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.getArticleById(articleId).pipe(
          switchMap(article => [ArticleActions.GetArticleByIdSuccess({ article })]),
          catchError(error => of(ArticleActions.GetArticleByIdFail(error))),
        );
      }),
    ),
  );

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.CreateArticle),
      switchMap(({ newArticle }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.createArticle(newArticle).pipe(
          switchMap(article => [ArticleActions.CreateArticleSuccess({ article })]),
          catchError(error => of(ArticleActions.CreateArticleFail(error))),
        );
      }),
    ),
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.CreateCategory),
      switchMap(({ newCategory }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.createCategory(newCategory).pipe(
          switchMap(category => [ArticleActions.CreateCategorySuccess({ category })]),
          catchError(error => of(ArticleActions.CreateCategoryFail(error))),
        );
      }),
    ),
  );

  addArticleToStudied$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.AddArticleToStudied),
      switchMap(({ studiedArticle }) => {
        this.generalLoadingService.setIsLoadingTrue();
        return this.articleService.addArticleToStudied(studiedArticle).pipe(
          switchMap(studiedArticle => [ArticleActions.AddArticleToStudiedSuccess({ studiedArticle })]),
          catchError(error => of(ArticleActions.AddArticleToStudiedFail(error))),
        );
      }),
    ),
  );

  stopLoading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ArticleActions.CreateArticleSuccess,
          ArticleActions.CreateArticleFail,
          ArticleActions.GetArticlesSuccess,
          ArticleActions.GetArticlesFail,
          ArticleActions.GetCategoriesSuccess,
          ArticleActions.GetCategoriesFail,
          ArticleActions.CreateCategorySuccess,
          ArticleActions.CreateCategoryFail,
          ArticleActions.GetArticlesByCategoryIdSuccess,
          ArticleActions.GetArticlesByCategoryIdFail,
          ArticleActions.GetArticleByIdSuccess,
          ArticleActions.GetArticleByIdFail,
          ArticleActions.AddArticleToStudiedSuccess,
          ArticleActions.AddArticleToStudiedFail,
        ),
        tap(() => this.generalLoadingService.setIsLoadingFalse()),
      ),
    { dispatch: false },
  );

  createSuccessfully$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ArticleActions.CreateArticleSuccess,
          ArticleActions.CreateCategorySuccess,
        ),
        tap(() => this.notificationService.showNotification({
          message: 'Data saved successfully',
          icon: 'save',
        })),
      ),
    { dispatch: false },
  );

  CreateArticleSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ArticleActions.CreateArticleSuccess),
        tap(() => this.router.navigateByUrl('/')),
      ),
    { dispatch: false },
  );
}
