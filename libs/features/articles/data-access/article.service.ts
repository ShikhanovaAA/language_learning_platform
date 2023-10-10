import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewArticle, Article, StudiedArticle, NewCategory, Category } from '@llp/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  createArticle(article: NewArticle): Observable<Article> {
    return this.httpClient.post<Article>('api/articles', article);
  }

  createCategory(category: NewCategory): Observable<Category> {
    return this.httpClient.post<Category>('api/categories', category);
  }

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>('api/articles');
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('api/categories');
  }

  getArticlesByCategoryId(categoryId: Category['id']): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`api/articles/category/${categoryId}`);
  }

  getArticleById(articleId: Article['id']): Observable<Article> {
    return this.httpClient.get<Article>(`api/articles/${articleId}`);
  }

  addArticleToStudied(studiedArticale: StudiedArticle): Observable<StudiedArticle> {
    return this.httpClient.post<StudiedArticle>('api/articles/add-to-studied', studiedArticale);
  }
}
