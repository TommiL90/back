import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './repositories/orders.repository';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: OrdersRepository) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.ordersRepository.create(createOrderDto);
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
