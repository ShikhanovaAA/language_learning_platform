import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz.model';
import { User } from '../user/user.model';
import { Question } from './question.model';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { AnswerOption } from './answer-option.model';
import { QuizController } from './quiz.controller';
import { Answer } from './answer.model';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
  imports: [
    UserModule,
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Quiz, Question, AnswerOption, User, Answer]),
  ],
  exports: [QuizService],
})
export class QuizModule {}
