import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return 'This action returns all coffees. limit: ${limit} and offset ${offset}';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this is the id: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this action updates ${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `deleted this ${id}`;
  }
}
