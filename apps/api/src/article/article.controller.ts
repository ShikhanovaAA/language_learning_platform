import { Body, Controller, Post, UseGuards, Request, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../utils/guards/roles.guard';
import { Roles } from '../utils/guards/roles-auth.decorator';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { AddArticleToStudiedDto } from './dto/add-artice-to-studied';
import { JwtAuthGuard } from '../utils/guards/jwt-auth.guard';
import { Article } from './article.model';

@ApiTags('Articles')
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({summary: 'Create an article'})
  @ApiResponse({status: 200})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  createArticle(@Body() dto: CreateArticleDto, @Request() request) {
    const userId = request.user.id;

    return this.articleService.createArticle(dto, userId);
  }

  @ApiOperation({summary: 'Get all articles'})
  @ApiResponse({status: 200, type: [Article]})
  @Get()
  getAll() {
    return this.articleService.getAll();
  }

  @ApiOperation({summary: 'Add an article to studied'})
  @UseGuards(JwtAuthGuard)
  @Post('/add-to-studied')
  addArticleToStudied(@Body() dto: AddArticleToStudiedDto) {
    return this.articleService.addArticleToStudied(dto);
  }

  @ApiOperation({summary: 'Get articles by category id'})
  @ApiResponse({status: 200, type: [Article]})
  @Get('/category/:id')
  getArticlesByCategoryId(@Param('id') id: number) {
    return this.articleService.getArticlesByCategoryId(id);
  }

  @ApiOperation({summary: 'Get article by id'})
  @ApiResponse({status: 200, type: Article})
  @Get('/:id')
  getArticleById(@Param('id') id: number) {
    return this.articleService.getArticleById(id);
  }
}
