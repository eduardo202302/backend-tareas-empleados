-- CreateTable
CREATE TABLE "Tarea" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
