import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ARTICLE_FEATURE_KEY, ArticleState } from './article.reducer';
import { Option } from '@llp/models';

export const selectArticleState = createFeatureSelector<ArticleState>(ARTICLE_FEATURE_KEY);

export const selectAllArticles = createSelector(selectArticleState, (state: ArticleState) => state.articles);

export const selectAllCategories = createSelector(selectArticleState, (state: ArticleState) => state.categories);

export const selectAllCategoriesAsOptions = createSelector(selectArticleState, (state: ArticleState) => {
  const categoryOptions: Option[] = state.categories.map(category => ({ key: category.id, label: category.name }));
  return categoryOptions;
});

export const selectArticlesOfSelectedCategory = createSelector(selectArticleState, (state: ArticleState) => state.articlesOfSelectedCategory);

export const selectSelectedCategory = createSelector(selectArticleState, (state: ArticleState) => state.articlesOfSelectedCategory[0]?.category);

export const selectSelectedArticle = createSelector(selectArticleState, (state: ArticleState) => state.selectedArticle);
