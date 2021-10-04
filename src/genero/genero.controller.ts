/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { GenerosService } from './genero.service';
import { Genero } from '.prisma/client';

@Controller('generos')
export class GenerosController {
  constructor(private generosService: GenerosService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generosService.create(createGenero);
  }

  @Get('/all')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generosService.findAll();
  }

  @Get('/single/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.generosService.findOne(id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateGenero: CreateGeneroDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Genero> {
    return this.generosService.update(id, updateGenero);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generosService.deleteOne({ id: Number(id) });
  }

  @Delete('/deleteAll')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.generosService.deleteAll();
  }
}
