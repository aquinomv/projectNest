import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Maturin';
  }
  @Get('nuevo')
  nuevoEndpoint() {
    return 'Yo soy un nuevo end point';
  }

  @Get('/ruta/')
  hello() {
    return 'con/sin/';
  }
}
