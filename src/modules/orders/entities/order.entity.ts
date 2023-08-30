import { randomUUID } from 'crypto';
import { OrdersStatus } from '../../../common/orderStatus.enum';

export class Order {
  readonly id: string;
  description: string;
  status: string;
  paid: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = randomUUID();
    this.status = OrdersStatus.Created;
    this.paid = false;
    this.createdAt = new Date();
  }
}
