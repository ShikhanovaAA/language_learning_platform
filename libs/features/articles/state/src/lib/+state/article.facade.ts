import { Injectable, inject } from '@angular/core';
import { Article, Category, NewArticle, NewCategory, StudiedArticle } from '@llp/models';
import { Store, Action, select } from '@ngrx/store';

import * as ArticleActions from './article.actions';
import * as ArticleSelectors from './article.selectors';

@Injectable()
export class ArticleFacade {
  private readonly store = inject(Store);

  allArticles$ = this.store.pipe(select(ArticleSelectors.selectAllArticles));
  allCategories$ = this.store.pipe(select(ArticleSelectors.selectAllCategories));
  categoryOptions$ = this.store.pipe(select(ArticleSelectors.selectAllCategoriesAsOptions));
  articlesOfSelectedCategory$ = this.store.pipe(select(ArticleSelectors.selectArticlesOfSelectedCategory));
  selectedCategory$ = this.store.pipe(select(ArticleSelectors.selectSelectedCategory));
  selectedArticle$ = this.store.pipe(select(ArticleSelectors.selectSelectedArticle));

  createArticle(newArticle: NewArticle) {
    this.dispatch(ArticleActions.CreateArticle({ newArticle }));
  }

  createCategory(newCategory: NewCategory) {
    this.dispatch(ArticleActions.CreateCategory({ newCategory }));
  }

  getAllArticles() {
    this.dispatch(ArticleActions.GetArticles());
  }

  getAllCategories() {
    this.dispatch(ArticleActions.GetCategories());
  }

  getArticlesByCategoryId(categoryId: Category['id']) {
    this.dispatch(ArticleActions.GetArticlesByCategoryId({ categoryId }));
  }

  getArticleById(articleId: Article['id']) {
    this.dispatch(ArticleActions.GetArticleById({ articleId }));
  }

  addArticleToStudied(studiedArticle: StudiedArticle) {
    this.dispatch(ArticleActions.AddArticleToStudied({ studiedArticle }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
