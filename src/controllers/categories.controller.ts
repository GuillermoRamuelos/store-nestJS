import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dto';

@Controller('categories')
export class CategoriesController {
  // Constructor with a categoriesService instance
  constructor(private categoriesService: CategoriesService) {}

  // Get All Categories
  @Get('')
  getAll() {
    return this.categoriesService.findAll();
  }

  // Get Category by ID
  @Get('/:categoryId')
  getById(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.findOne(categoryId);
  }

  // Create Category
  @Post('')
  create(@Body() payload: CreateCategoryDto) {
    return this.categoriesService.create(payload);
  }

  // Update Category
  @Put('/:categoryId')
  update(
    @Param('categoryId') categoryId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(categoryId, payload);
  }

  // Delete Category
  @Delete('/:categoryId')
  delete(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoriesService.remove(categoryId);
  }

  // Get
  @Get('/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: number,
  ) {
    return `Product with id ${productId} from category with id ${categoryId}`;
  }
}
