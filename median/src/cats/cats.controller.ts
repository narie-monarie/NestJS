import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CatEntity } from './entities/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiCreatedResponse({ type: CatEntity })
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOkResponse({ type: CatEntity, isArray: true })
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CatEntity })
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CatEntity })
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CatEntity })
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
