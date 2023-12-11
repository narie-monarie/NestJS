import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll():string{
        return "These action returns all coffees";
    }

    @Get(':id')
    findOne(@Param('id') id:string):string{
        return `this returns #${id} coffee`
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(id:string, body){
        return `this action updates ${id} coffee`
    }

}
