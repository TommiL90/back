import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './repositories/orders.repository';
import { Order } from './entities/order.entity';
import { OrderProductsService } from '../order-products/order-products.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private ordersRepository: OrdersRepository,
    private productsService: ProductsService,
    private orderProductsService: OrderProductsService,
  ) { }

  async createOrderWithProducts(createOrderDto: CreateOrderDto): Promise<Order> {
    const newOrder = await this.ordersRepository.create(createOrderDto);

    const { products } = createOrderDto; 

    let totalPriceOrder = 0

    for (const product of products) {
        const {productId, quantity} = product

        const productPrice = await this.productsService.findOne(productId)

        totalPriceOrder += productPrice.price * quantity
       
        await this.orderProductsService.create({
          productId: productId,
          orderId: newOrder.id,
          quantity: quantity,
          totalPrice: productPrice.price * quantity
        })
    }

    const order = await this.ordersRepository.update(newOrder.id, {totalPriceOrder: totalPriceOrder });

    return order;
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.findAll();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.ordersRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.ordersRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return await this.ordersRepository.update(id, updateOrderDto);
  }

  async remove(id: string): Promise<void> {
    const order = await this.ordersRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return await this.ordersRepository.remove(id);
  }
}
