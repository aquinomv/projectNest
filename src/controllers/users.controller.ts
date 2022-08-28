import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':userId')
  getBrand(@Param('userId') userId: string) {
    return {
      message: `el id del nuevo usuario es ${userId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando un nuevo usuario',
      payload,
    };
  }
}
