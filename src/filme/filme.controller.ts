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
import { FilmesService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.create(createFilme);
  }

  @Get('/all')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Filme[]> {
    return this.filmesService.findAll();
  }

  @Get('/single/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.findOne(id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateFilme: CreateFilmeDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Filme> {
    return this.filmesService.update(id, updateFilme);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.filmesService.deleteOne({ id: Number(id) });
  }

  @Delete('/deleteAll')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.filmesService.deleteAll();
  }
}
