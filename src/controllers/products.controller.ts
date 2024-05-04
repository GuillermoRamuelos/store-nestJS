import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('')
  @HttpCode(HttpStatus.ACCEPTED)
  getAll(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('/filter')
  getWithFilter() {
    return { message: `Filtering products` };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getById(@Res() response: Response, @Param('productId') productId: number) {
    response.status(200).send({
      message: `Product with id ${productId}`,
    });
  }

  @Post('')
  create(@Body() payload: any) {
    return {
      message: 'Product created!',
      payload: payload,
    };
  }

  @Put('/:productId')
  update(@Param('productId') productId: number, @Body() payload: any) {
    return {
      message: 'Product updated!',
      payload: payload,
    };
  }

  @Patch('/:productId')
  updateNameOrPrice(
    @Param('productId') productId: number,
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
  delete(@Param('productId') productId: number) {
    return {
      message: 'Product deleted!',
      productId: productId,
    };
  }
}
