import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../utils/guards/roles.guard';
import { Roles } from '../utils/guards/roles-auth.decorator';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './quiz.model';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { JwtAuthGuard } from '../utils/guards/jwt-auth.guard';
import { UserGuard } from '../utils/guards/user.guard';

@ApiTags('Quizzes')
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @ApiOperation({summary: 'Create a Quiz'})
  @ApiResponse({status: 200})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  createArticle(@Body() dto: CreateQuizDto) {
    return this.quizService.createQuiz(dto);
  }

  @ApiOperation({summary: 'Get all quizzes'})
  @ApiResponse({status: 200})
  @UseGuards(UserGuard)
  @Get()
  getAllQuizzes(@Request() request: any) {
    const userId = request.user?.id;

    return this.quizService.getAllQuizzes(userId);
  }

  @ApiOperation({summary: 'Get quiz by id'})
  @ApiResponse({status: 200, type: Quiz})
  @Get('/:id')
  getArticleById(@Param('id') id: number) {
    return this.quizService.getQuizById(id);
  }

  @ApiOperation({summary: 'Save quiz answers'})
  @ApiResponse({status: 200})
  @UseGuards(JwtAuthGuard)
  @Post('/answers')
  saveQuizAnswers(@Body() dto: CreateAnswerDto[], @Request() request: any) {
    const userId = request.user.id;

    return this.quizService.saveQuizAnswers(dto, userId);
  }

  @ApiOperation({summary: 'Get passed quiz by id'})
  @ApiResponse({status: 200, type: Quiz})
  @UseGuards(JwtAuthGuard)
  @Get('/passed/:id')
  getPassedQuizById(@Param('id') id: number, @Request() request: any) {
    const userId = request.user.id;

    return this.quizService.getPassedQuizById(id, userId);
  }
}
