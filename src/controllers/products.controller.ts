import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //miemoji 💗
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `product: limit=> ${limit} offset=> ${offset}`;
  // }
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
