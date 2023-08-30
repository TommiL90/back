import { Module } from '@nestjs/common';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderProductsModule } from './modules/order-products/order-products.module';

@Module({
  imports: [CategoriesModule, ProductsModule, OrdersModule, OrderProductsModule],
})
export class AppModule {}
