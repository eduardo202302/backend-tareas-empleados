-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_userId_fkey";

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
