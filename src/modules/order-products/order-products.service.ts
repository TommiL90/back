import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { OrderProductsRepository } from './repositories/order-products.repository';
import { OrderProduct } from './entities/order-product.entity';

@Injectable()
export class OrderProductsService {
  constructor(private orderProductsRepository: OrderProductsRepository) {}

  async create(
    createOrderProductDto: CreateOrderProductDto,
  ): Promise<OrderProduct> {
    const newOrderProduct = await this.orderProductsRepository.create(
      createOrderProductDto,
    );

    return newOrderProduct;
  }

  async findAll(): Promise<OrderProduct[] | []> {
    return await this.orderProductsRepository.findAll();
  }

  async findOne(id: string): Promise<OrderProduct> {
    const orderProduct = await this.orderProductsRepository.findOne(id);
    return orderProduct;
  }
}
