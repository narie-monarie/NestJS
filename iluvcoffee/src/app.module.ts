import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees/coffees.controller';

@Module({
  imports: [],
  controllers: [CoffeesController],
  providers: [], 
})
export class AppModule {}
