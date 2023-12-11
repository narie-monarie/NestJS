import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll():string{
        return "These action returns all coffees";
    }
}
