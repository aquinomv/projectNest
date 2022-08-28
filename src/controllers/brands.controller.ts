import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string) {
    return {
      message: `el id de la marca es ${brandId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando marca',
      payload,
    };
  }
}
