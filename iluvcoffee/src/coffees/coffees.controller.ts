import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly cofeesService: CoffeesService) { }
    @Get()
    findAll(@Query() paginationQuery) {
        //const {limit, offset} = paginationQuery;
        return this.cofeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cofeesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body) {
        return this.cofeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.cofeesService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    remove(@Param('id') id: string) {
        return this.cofeesService.remove(id);
    }

}
