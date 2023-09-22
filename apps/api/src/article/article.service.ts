import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { AddArticleToStudiedDto } from './dto/add-artice-to-studied';
import { User } from '../user/user.model';
import { StudiedArticles } from './studied-articles.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article) private articleRepository: typeof Article,
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(StudiedArticles) private studiedArticlesRepository: typeof StudiedArticles,
  ) {}

  async createArticle(dto: CreateArticleDto, authorId: number): Promise<Article> {
    const newArticle = {
      ...dto,
      authorId,
    };

    const article = await this.articleRepository.create(newArticle);

    return article;
  }

  async getAll() {
    const articles = await this.articleRepository.findAll({ include: { all: true } });

    return articles;
  }

  async addArticleToStudied(dto: AddArticleToStudiedDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const article = await this.articleRepository.findByPk(dto.articleId);

    if (article && user) {
        const rel = await this.studiedArticlesRepository.create(dto);
        return rel;
    }

    throw new HttpException('User or article not found', HttpStatus.NOT_FOUND);
  }

  async getArticlesByCategoryId(id: number) {
    const articles = await this.articleRepository.findAll({
      where: { categoryId: id },
      include: { all: true }
    });

    return articles;
  }

  async getArticleById(id: number) {
    const article = await this.articleRepository.findByPk(id, {
      include: { all: true }
    });

    return article;
  }
}
