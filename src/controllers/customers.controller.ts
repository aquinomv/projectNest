import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get(':customerId')
  getBrand(@Param('customerId') customerId: string) {
    return {
      message: `el id del cliente es ${customerId}`,
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
