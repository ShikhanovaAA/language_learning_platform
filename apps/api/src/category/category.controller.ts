import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './category.model';
import { Roles } from '../utils/guards/roles-auth.decorator';
import { RolesGuard } from '../utils/guards/roles.guard';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({summary: 'Create a new category'})
  @ApiResponse({status: 200, type: Category})
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }

  @ApiOperation({summary: 'Get all categories'})
  @ApiResponse({status: 200, type: [Category]})
  @Get()
  getAll() {
    return this.categoryService.getAll();
  }
}
