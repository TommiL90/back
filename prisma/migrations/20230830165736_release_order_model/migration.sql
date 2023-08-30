/*
  Warnings:

  - Added the required column `createdAt` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `ProductOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN "totalPriceOrder" REAL;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "ProductOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductOrder" ("id", "orderId", "productId", "quantity") SELECT "id", "orderId", "productId", "quantity" FROM "ProductOrder";
DROP TABLE "ProductOrder";
ALTER TABLE "new_ProductOrder" RENAME TO "ProductOrder";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
