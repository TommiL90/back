import { Module } from '@nestjs/common';
import { OrderProductsService } from './order-products.service';
import { OrderProductsController } from './order-products.controller';
import { PrismaService } from '../../database/prisma.service';
import { OrderProductsRepository } from './repositories/order-products.repository';
import { OrderProductsPrismaRepository } from './repositories/prisma/order-products.prisma.repository';

@Module({
  controllers: [OrderProductsController],
  providers: [OrderProductsService, PrismaService, { provide: OrderProductsRepository, useClass: OrderProductsPrismaRepository }],
  exports: [OrderProductsService],
})
export class OrderProductsModule { }
