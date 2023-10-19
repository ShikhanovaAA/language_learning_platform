import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewArticleForm } from '../../models/new-article-form';
import { ArticleFacade } from '@llp/features/articles/state';
import { NewCategory, Option } from '@llp/models';
import { Observable } from 'rxjs';

const MAX_ARTICLE_TEXT_LENGTH = 30000;

@Component({
  selector: 'llp-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  newArticleForm = new FormGroup<NewArticleForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(3), Validators.required],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(MAX_ARTICLE_TEXT_LENGTH), Validators.required],
    }),
    categoryId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  categoryOptions$: Observable<Option[]> = this.articleFacade.categoryOptions$;

  MAX_ARTICLE_TEXT_LENGTH = MAX_ARTICLE_TEXT_LENGTH;

  constructor(private articleFacade: ArticleFacade) {}

  ngOnInit(): void {
    this.articleFacade.getAllCategories();
  }

  saveArticle() {
    if (!this.newArticleForm.valid) return;

    const { title, text, categoryId } = this.newArticleForm.value;
    if (!title || !text || !categoryId) return;

    this.articleFacade.createArticle({
      title,
      text,
      categoryId: +categoryId,
    });
  }

  get textLength(): number {
    return this.newArticleForm.value.text?.length || 0;
  }

  createCategory(newCategory: NewCategory) {
    this.articleFacade.createCategory(newCategory);
  }
}
