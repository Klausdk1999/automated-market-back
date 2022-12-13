-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "hora" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "payment_url" SET DEFAULT 'null',
ALTER COLUMN "reference_id" SET DEFAULT 'null';
