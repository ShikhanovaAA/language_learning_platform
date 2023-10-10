import { Injectable} from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Metadata, defaultMetadata } from '@llp/models';
import { EnvironmentService} from '@llp/shared/environments';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  env = this.environmentService.getEnvironmentVariables();

  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private environmentService: EnvironmentService,
    private router: Router,
  ) {}

  public updateMetadata(metadata: Partial<Metadata>, index = true): void {
    const pageMetadata: Metadata = {...defaultMetadata, ...metadata};
    const metatags: MetaDefinition[] = this.generateMetaDefinitions(pageMetadata);

    this.metaTagService.addTags([
      ...metatags,
      { property: 'og:url', content: `${this.env.APP_URL}${this.router.url}`},
      { name: 'robots', content: index ? 'index, follow' : 'noindex' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    ]);

    this.titleService.setTitle(pageMetadata.title);
  }

  private generateMetaDefinitions(metadata: Metadata): MetaDefinition[] {
    return [
      { name: 'title', content: metadata.title },
      { property: 'og:title', content: metadata.title },

      { name: 'description', content: metadata.description },
      { property: 'og:description', content: metadata.description },

      { name: 'keywords', content: metadata.keywords.join(', ') },

      { property: 'og:type', content: metadata.type },

      { property: 'og:image', content: `${this.env.APP_URL}${metadata.image}`},
    ];
  }
}
