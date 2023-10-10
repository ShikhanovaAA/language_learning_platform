import { AuthFacade } from '@llp/features/auth/state';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { ArticleFacade } from '@llp/features/articles/state';
import { Article, StudiedArticle, User } from '@llp/models';
import { Observable, filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from '@llp/shared/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'llp-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailsComponent implements OnInit {
  article$: Observable<Article | null> = this.articleFacade.selectedArticle$;
  user$: Observable<User | null> = this.authFacade.user$;

  constructor(
    private articleFacade: ArticleFacade,
    private authFacade: AuthFacade,
    private route: ActivatedRoute,
    private metadataService: MetadataService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit(): void {
    this.getArticleById();
    this.setMetadata();
  }

  getArticleById() {
    this.route.params.subscribe(params => {
      this.articleFacade.getArticleById(+params['id']);
    });
  }

  setMetadata() {
    this.article$.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter((article): article is Article => article !== null),
    ).subscribe((article: Article) => {
      this.metadataService.updateMetadata({
        title: article.title,
        description: article.description,
        keywords: article.keywords ?? ['English grammar', 'how to learn English in 2 weeks'],
        type: 'article',
        image: article.image ?? '/assets/images/like-logo.png',
      });
    });
  }

  addArticleToStudied(studiedArticle: StudiedArticle) {
    this.articleFacade.addArticleToStudied(studiedArticle);
  }
}


