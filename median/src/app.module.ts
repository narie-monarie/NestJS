import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CatsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
