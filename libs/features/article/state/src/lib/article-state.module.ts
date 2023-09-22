import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromArticle from './+state/article.reducer';
import { ArticleEffects } from './+state/article.effects';
import { ArticleFacade } from './+state/article.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromArticle.ARTICLE_FEATURE_KEY, fromArticle.articleReducer),
    EffectsModule.forFeature([ArticleEffects]),
  ],
  providers: [ArticleFacade]
})
export class ArticleStateModule {}
