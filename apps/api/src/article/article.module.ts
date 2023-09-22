import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { Article } from './article.model';
import { User } from '../user/user.model';
import { StudiedArticles } from './studied-articles.model';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  imports: [
    UserModule,
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Article, User, StudiedArticles])
  ],
  exports: [ArticleService]
})
export class ArticleModule {}
