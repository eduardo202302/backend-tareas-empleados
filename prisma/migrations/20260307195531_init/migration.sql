-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sueldo" DOUBLE PRECISION NOT NULL,
    "cumpleaños" TIMESTAMP(3) NOT NULL,
    "direccion" TEXT NOT NULL,
    "comentarios" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
