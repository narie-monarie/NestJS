import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

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
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.cofeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.cofeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    remove(@Param('id') id: string) {
        return this.cofeesService.remove(id);
    }

}
