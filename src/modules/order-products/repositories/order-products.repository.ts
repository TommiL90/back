
import { CreateOrderProductDto } from '../dto/create-order-product.dto';
import { OrderProduct } from '../entities/order-product.entity';

export abstract class OrderProductsRepository {
  abstract create(
    createOrderProductDto: CreateOrderProductDto,
  ): Promise<OrderProduct >;

  abstract findAll(): Promise<OrderProduct[] | []>;

  abstract findOne(id: string): Promise<OrderProduct>;
}
