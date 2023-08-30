import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from '../../database/prisma.service';
import { OrdersRepository } from './repositories/orders.repository';
import { OrdersPrismaRepository } from './repositories/prisma/orders.prisma.repository';
import { ProductsModule } from '../products/products.module';
import { OrderProductsModule } from '../order-products/order-products.module';

@Module({
  imports: [ProductsModule, OrderProductsModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    PrismaService,
    { provide: OrdersRepository, useClass: OrdersPrismaRepository },
  ],
})
export class OrdersModule {}
