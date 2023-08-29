import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Category 1',
    required: true,
    minLength: 3,
    maxLength: 15,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
