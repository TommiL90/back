import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

export abstract class ProductsRepository {
  abstract create(createProductDto: CreateProductDto): Promise<Product>;

  abstract findAll(): Promise<Product[]>;

  abstract findOne(id: string): Promise<Product>;

  abstract update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product>;

  abstract remove(id: string): Promise<void>;
}
