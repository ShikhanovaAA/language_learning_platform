import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewArticleForm } from '../../models/new-article-form';
import { ArticleFacade } from '@llp/features/articles/state';
import { NewCategory, SelectOption,  } from '@llp/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'llp-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent {
  newArticleForm = new FormGroup<NewArticleForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(3), Validators.required],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(2000), Validators.required]
    }),
    categoryId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  categoryOptions$: Observable<SelectOption[]> = this.articleFacade.categoryOptions$;

  constructor(private articleFacade: ArticleFacade) {}

  saveArticle() {
    if (!this.newArticleForm.valid) return;

    const { title, text, categoryId } = this.newArticleForm.value;
    if (!title || !text || !categoryId) return;

    this.articleFacade.createArticle({
      title,
      text,
      categoryId: +categoryId
    });
  }

  createCategory(newCategory: NewCategory) {
    this.articleFacade.createCategory(newCategory);
  }
}
