import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { OrdersStatus } from '../../../common/orderStatus.enum';
import { CategoryName } from 'src/common/category.enum';

export class CreateOrderDto {
  @ApiProperty({
    example: 'Product description',
    description: 'Description of the product',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 120,
  })
  @IsOptional()
  @MaxLength(120)
  @MinLength(5)
  description: string;

  @ApiProperty({
    description: 'Status of the Order',
    example: 'Sides',
    enum: OrdersStatus,
    enumName: 'OrdersStatus',
    required: true,
    minLength: 3,
    maxLength: 7,
    default: OrdersStatus.Created,
  })
  @IsEnum(CategoryName)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Price of the product',
    example: '10.00',
    type: Boolean,
    required: true,
    minLength: 3,
    maxLength: 7,
  })
  paid: boolean;
}
