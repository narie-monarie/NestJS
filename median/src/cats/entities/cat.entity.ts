import { ApiProperty } from '@nestjs/swagger';
import { Cat } from '@prisma/client';

export class CatEntity implements Cat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
