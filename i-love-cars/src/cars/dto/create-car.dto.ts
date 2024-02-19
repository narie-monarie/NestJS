import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly manufacturer: string[];

  @IsString()
  readonly category: string;
}
