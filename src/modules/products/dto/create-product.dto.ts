import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Product 1',
    description: 'Name of the product',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 120,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'Product description',
    description: 'Description of the product',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 120,
  })
  @IsNotEmpty()
  @MaxLength(120)
  @MinLength(3)
  description: string;

  @ApiProperty({
    example: '$120,00',
    description: 'Price of the product',
    required: true,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: 'Category 1',
    description: 'Category of the product',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 120,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  @MinLength(3)
  categoryId: string;

  @ApiProperty({
    example: 'https://www.google.com/image.png',
    description: 'Image of the product',
    required: false,
    type: String,
    minLength: 3,
    maxLength: 120,
  })
  @IsNotEmpty()
  @IsUrl()
  @IsString()
  @Matches(/\.(png|jpg|jpeg|svg)$/i, {
    message: 'imgUrl must be a valid image URL (PNG, JPG, SVG)',
  })
  imageUrl: string;
}
