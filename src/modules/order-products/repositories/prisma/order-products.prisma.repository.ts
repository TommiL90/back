import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../../database/prisma.service";
import { CreateOrderProductDto } from "../../dto/create-order-product.dto";
import { OrderProduct } from "../../entities/order-product.entity";
import { OrderProductsRepository } from "../order-products.repository";

@Injectable()
export class OrderProductsPrismaRepository implements OrderProductsRepository {
  constructor(private prisma: PrismaService) { }
  async create(data: CreateOrderProductDto): Promise<OrderProduct> {
    const orderProduct = new OrderProduct();
    Object.assign(orderProduct, data);
    return await this.prisma.productOrder.create({ data: { ...orderProduct } });
  }

  async findAll(): Promise<OrderProduct[] | []> {
   return await this.prisma.productOrder.findMany();
  }
  async findOne(id: string): Promise<OrderProduct> {
    return await this.prisma.productOrder.findUnique({
      where: { id },
    });
  }
}