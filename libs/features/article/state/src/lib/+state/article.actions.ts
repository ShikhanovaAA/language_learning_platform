import { Article, Category, NewArticle, NewCategory, StudiedArticle } from '@llp/models';
import { createAction, props } from '@ngrx/store';

export const CreateArticle = createAction('[Article] Create Article', props<{ newArticle: NewArticle }>());

export const CreateArticleSuccess = createAction('[Article] Create Article Success', props<{ article: Article }>());

export const CreateArticleFail = createAction('[Article] Create Article Fail', props<{ errors: any }>());


export const GetArticles = createAction('[Article] Get Articles');

export const GetArticlesSuccess = createAction('[Article] Get Articles Success', props<{ articles: Article[] }>());

export const GetArticlesFail = createAction('[Article] Get Articles Fail', props<{ errors: any }>());


export const GetArticlesByCategoryId = createAction('[Article] Get Articles By Category Id', props<{ categoryId: Category['id'] }>());

export const GetArticlesByCategoryIdSuccess = createAction('[Article] Get Articles By Category Id Success', props<{ articles: Article[] }>());

export const GetArticlesByCategoryIdFail = createAction('[Article] Get Articles By Category Id Fail', props<{ errors: any }>());


export const GetArticleById = createAction('[Article] Get Article By Id', props<{ articleId: Article['id'] }>());

export const GetArticleByIdSuccess = createAction('[Article] Get Article By Id Success', props<{ article: Article }>());

export const GetArticleByIdFail = createAction('[Article] Get Article By Id Fail', props<{ errors: any }>());


export const CreateCategory = createAction('[Article] Create Category', props<{ newCategory: NewCategory }>());

export const CreateCategorySuccess = createAction('[Article] Create Category Success', props<{ category: Category }>());

export const CreateCategoryFail = createAction('[Article] Create Category Fail', props<{ errors: any }>());


export const GetCategories = createAction('[Article] Get Categories');

export const GetCategoriesSuccess = createAction('[Article] Get Categories Success', props<{ categories: Category[] }>());

export const GetCategoriesFail = createAction('[Article] Get Categories Fail', props<{ errors: any }>());


export const AddArticleToStudied = createAction('[Article] Add Article To Studied', props<{ studiedArticle: StudiedArticle }>());

export const AddArticleToStudiedSuccess = createAction('[Article] Add Article To Studiet Success', props<{ studiedArticle: StudiedArticle }>());

export const AddArticleToStudiedFail = createAction('[Article] Add Article To Studied Fail', props<{ errors: any }>());
