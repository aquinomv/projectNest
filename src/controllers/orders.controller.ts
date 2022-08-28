import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return {
      message: `el id de la orden es ${orderId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando nueva orden ',
      payload,
    };
  }
}
