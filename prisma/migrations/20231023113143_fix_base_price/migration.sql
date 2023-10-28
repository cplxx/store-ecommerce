/*
  Warnings:

  - You are about to alter the column `basePrice` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,2)` to `Decimal(7,2)`.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "basePrice" SET DATA TYPE DECIMAL(7,2);
