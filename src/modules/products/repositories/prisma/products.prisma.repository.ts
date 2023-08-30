import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../products.repository';
import { CreateProductDto } from '../../dto/create-product.dto';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { Product } from '../../entities/product.entity';
import { PrismaService } from '../../../../database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductsPrismaRepository implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    const product = new Product();
    Object.assign(product, data);

    const newProduct = await this.prisma.product.create({
      data: { ...product },
    });

    return plainToInstance(Product, newProduct);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      include: { category: true },
    });
    return plainToInstance(Product, products);
  }

  async findOne(id: string): Promise<Product> {
    const retrieveProduct = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    return plainToInstance(Product, retrieveProduct);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updateProduct = await this.prisma.product.update({
      where: { id },
      data: { ...updateProductDto },
    });

    return plainToInstance(Product, updateProduct);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
