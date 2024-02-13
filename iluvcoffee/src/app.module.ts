import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [CoffeesController],
  providers: [CoffeesService], 
})
export class AppModule {}
