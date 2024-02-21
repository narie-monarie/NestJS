import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [PrismaModule],
})
export class CatsModule {}
