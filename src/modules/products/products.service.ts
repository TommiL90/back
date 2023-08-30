import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './repositories/products.repository';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private categoriesService: CategoriesService,
  ) {}

  create(createProductDto: CreateProductDto) {
    this.verifyCategory(createProductDto.categoryId);
    return this.productsRepository.create(createProductDto);
  }

  findAll() {
    return this.productsRepository.findAll();
  }

  findOne(id: string) {
    const product = this.productsRepository.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    this.verifyCategory(updateProductDto.categoryId);
    const product = this.productsRepository.update(id, updateProductDto);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  remove(id: string) {
    const deletedProduct = this.productsRepository.remove(id);
    if (!deletedProduct) {
      throw new NotFoundException('Product not found');
    }
    return deletedProduct;
  }

  private verifyCategory(categoryId: string) {
    const findCategory = this.categoriesService.findOne(categoryId);

    if (!findCategory) {
      throw new NotFoundException('Category not found');
    }
  }
}
