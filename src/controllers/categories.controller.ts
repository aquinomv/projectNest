import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return {
      message: `producto ${productId} y su categoria escd ${id}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando categoria',
      payload,
    };
  }
}
