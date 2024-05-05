import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  //Query,
  Body,
  HttpStatus,
  HttpCode,
  //Res,
  //ParseIntPipe,
} from '@nestjs/common';

// import { Response } from 'express';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  // Constructor with a productsService instance
  constructor(private productsService: ProductsService) {}

  @Get('')
  @HttpCode(HttpStatus.ACCEPTED)
  //getAll(@Query('limit') limit: number = 100, @Query('offset') offset: number = 0, @Query('brand') brand: string)
  getAll() {
    return this.productsService.findAll();
  }

  @Get('/filter')
  getWithFilter() {
    return { message: `Filtering products` };
  }

  @Get('/:productId')
  getById(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `Product with id ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }

  @Post('')
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Product created!',
    //   payload: payload,
    // };
    return this.productsService.create(payload);
  }

  @Put('/:productId')
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() payload: UpdateProductDto,
  ) {
    // return {
    //   message: 'Product updated!',
    //   payload: payload,
    // };
    return this.productsService.update(productId, payload);
  }

  @Patch('/:productId')
  updateNameOrPrice(
    @Param('productId', ParseIntPipe) productId: number,
    @Body('name') name: string,
    @Body('price') price: number,
  ) {
    return {
      message: 'Product updated!',
      productId: productId,
      updatedData: { name, price },
    };
  }

  @Delete('/:productId')
  delete(@Param('productId', ParseIntPipe) productId: number) {
    // return {
    //   message: 'Product deleted!',
    //   productId: productId,
    // };
    return this.productsService.remove(productId);
  }
}
