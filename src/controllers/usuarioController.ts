import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        sueldo: req.body.sueldo,
        cumpleaños: req.body.cumpleaños,
        direccion: req.body.direccion,
        cedula: req.body.cedula,
        email: req.body.email,
        telefono: req.body.telefono,
      },
    });
    res.json({ message: "Usuario creado correctamente", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json({ message: "Usuarios obtenidos correctamente", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const getUsuarioById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario encontrado", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: req.body.name,
        email: req.body.email,
        telefono: req.body.telefono,
        cedula: req.body.cedula,
        sueldo: req.body.sueldo,
        direccion: req.body.direccion,
        cumpleaños: req.body.cumpleaños,
      },
    });
    res.json({ message: "Usuario actualizado correctamente", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Usuario eliminado correctamente", data: true });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
