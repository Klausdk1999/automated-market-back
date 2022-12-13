/*
  Warnings:

  - You are about to drop the column `compra` on the `purchases` table. All the data in the column will be lost.
  - Added the required column `payment_url` to the `purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference_id` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "epcs" ADD COLUMN     "purchase_id" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "compra",
ADD COLUMN     "payment_url" TEXT NOT NULL,
ADD COLUMN     "reference_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "epcs" ADD CONSTRAINT "epcs_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
