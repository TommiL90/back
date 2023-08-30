import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderProductsService } from './order-products.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';

@Controller('order-products')
export class OrderProductsController {
  constructor(private readonly orderProductsService: OrderProductsService) {}

  @Post()
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductsService.create(createOrderProductDto);
  }

  @Get()
  findAll() {
    return this.orderProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderProductsService.findOne(id);
  }
}
