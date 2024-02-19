import { Module } from '@nestjs/common';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'monari',
      password: 'secret',
      database: 'narie',
      autoLoadEntities: true,
      //disable in production
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
