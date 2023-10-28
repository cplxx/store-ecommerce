/*
  Warnings:

  - You are about to drop the column `discountPercent` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountPercent",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "basePrice" SET DATA TYPE DECIMAL(8,2);
