/*
  Warnings:

  - You are about to drop the column `validade_at` on the `check_ins` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- AlterTable
ALTER TABLE "check_ins" DROP COLUMN "validade_at",
ADD COLUMN     "validate_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MEMBER';
