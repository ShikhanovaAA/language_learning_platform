import { Module, forwardRef } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from '../article/article.model';
import { Category } from './category.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Category, Article])
  ],
  exports: [CategoryService]
})
export class CategoryModule {}
