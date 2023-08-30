import { randomUUID } from 'crypto';

export class OrderProduct {
  readonly id: string;

  productId: string;

  orderId: string;

  quantity: number;

  totalPrice: number;

  createdAt: Date;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
