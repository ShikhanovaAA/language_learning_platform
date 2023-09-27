import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiButtonModule } from '@llp/ui/ui-kit/button';
import { UiFormFieldModule } from '@llp/ui/ui-kit/form-field';
import { UiInputModule } from '@llp/ui/ui-kit/input';
import { ArticleStateModule } from '@llp/features/articles/state';
import { UiSelectModule } from '@llp/ui/ui-kit/select';
import { MatIconModule } from '@angular/material/icon';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { QuillModule } from 'ngx-quill';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { IsStudiedPipe } from './pipes/studied-article.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextWithoutHtmlTagsPipe } from './pipes/text-without-html-tags.pipe';
import { ArticleLayoutComponent } from './components/article-layout/article-layout.component';
import { TextSelectionDirectiveModule } from '@llp/shared/directives/text-selection';
import { DictionaryStateModule } from '@llp/features/dictionary/state';
import { ReadingTimePipe } from './pipes/reading-time.pipe';
import { ReadingTimeComponent } from './components/reading-time/reading-time.component';
import { ArticleInfoComponent } from './components/article-info/article-info.component';
import { AddArticleToStudiedComponent } from './components/add-article-to-studied/add-article-to-studied.component';
import { ReaderCountComponent } from './components/reader-count/reader-count.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    UiInputModule,
    UiFormFieldModule,
    UiButtonModule,
    ReactiveFormsModule,
    ArticleStateModule,
    UiSelectModule,
    MatIconModule,
    MatTooltipModule,
    QuillModule.forRoot(),
    TextSelectionDirectiveModule,
    DictionaryStateModule,
  ],
  declarations: [
    ArticleListComponent,
    NewArticleComponent,
    ArticlesComponent,
    ArticleCardComponent,
    NewCategoryComponent,
    CategoryListComponent,
    CategoryArticlesComponent,
    ArticleDetailsComponent,
    IsStudiedPipe,
    TextWithoutHtmlTagsPipe,
    ArticleLayoutComponent,
    ReadingTimePipe,
    ReadingTimeComponent,
    ArticleInfoComponent,
    AddArticleToStudiedComponent,
    ReaderCountComponent,
  ],
  exports: [],
})
export class ArticleModule {}
