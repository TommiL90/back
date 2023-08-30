import { randomUUID } from 'crypto';

export class Category {
  readonly id: string;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
