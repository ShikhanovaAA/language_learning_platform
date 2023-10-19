import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { Role } from './role/role.model';
import { UserRoles } from './role/user-roles.model';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { Article } from './article/article.model';
import { StudiedArticles } from './article/studied-articles.model';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';
import { DictionaryModule } from './dictionary/dictionary.module';
import { DictionaryWord } from './dictionary/dictionary.model';
import { QuizModule } from './quiz/quiz.module';
import { Quiz } from './quiz/quiz.model';
import { Question } from './quiz/question.model';
import { AnswerOption } from './quiz/answer-option.model';
import { Answer } from './quiz/answer.model';

@Module({
  imports: [
    UserModule,
    RoleModule,
    AuthModule,
    ArticleModule,
    CategoryModule,
    DictionaryModule,
    QuizModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Article,
        StudiedArticles,
        Category,
        DictionaryWord,
        Quiz,
        Question,
        AnswerOption,
        Answer,
      ],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
