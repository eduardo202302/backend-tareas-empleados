/*
  Warnings:

  - Made the column `ciudad` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ciudad" SET NOT NULL;
