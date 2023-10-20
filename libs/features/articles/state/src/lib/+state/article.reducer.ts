import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { Article, Category } from '@llp/models';
import * as ArticleActions from './article.actions';

export const ARTICLE_FEATURE_KEY = 'articles';

export interface ArticleState extends EntityState<Article> {
  articles: Article[];
  categories: Category[]
  articlesOfSelectedCategory: Article[];
  selectedArticle: Article | null;
}

export interface ArticlePartialState {
  readonly [ARTICLE_FEATURE_KEY]: ArticleState;
}

export const articleAdapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialArticlesState: ArticleState = articleAdapter.getInitialState({
  articles: [],
  categories: [],
  articlesOfSelectedCategory: [],
  selectedArticle: null,
});

const reducer = createReducer(
  initialArticlesState,
  on(ArticleActions.GetArticlesSuccess, (state, { articles }) => ({
    ...state,
    articles,
  })),
  on(ArticleActions.GetCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
  })),
  on(ArticleActions.CreateCategorySuccess, (state, { category }) => ({
    ...state,
    categories: state.categories.concat(category),
  })),
  on(ArticleActions.GetArticlesByCategoryIdSuccess, (state, { articles }) => ({
    ...state,
    articlesOfSelectedCategory: articles,
  })),
  on(ArticleActions.GetArticleByIdSuccess, (state, { article }) => ({
    ...state,
    selectedArticle: article,
  })),
  on(ArticleActions.AddArticleToStudiedSuccess, (state, { studiedArticle }) => ({
    ...state,
    articles: state.articles.map(article => article.id !== studiedArticle.articleId
      ? article
      : {
        ...article,
        readers: article.readers.concat({id: studiedArticle.userId}),
      },
    ),
    selectedArticle: state.selectedArticle
    ? {
      ...state.selectedArticle,
      readers: state.selectedArticle.readers.concat({id: studiedArticle.userId}),
    }
    : null,
  })),

);

export function articleReducer(state: ArticleState | undefined, action: Action) {
  return reducer(state, action);
}
