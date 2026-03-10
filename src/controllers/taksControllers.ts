import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const createtaks = async (req: Request, res: Response) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: "El ID del usuario es requerido" });
    }

    const User = await prisma.user.findUnique({
        where: { id: Number(userId) },
    });

    if (!User) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const tieneTarea = await prisma.tarea.findFirst({
        where: { userId: User.id, completada: false },
    });

    if (tieneTarea) {
        return res.status(400).json({ error: "El usuario ya tiene una tarea asignada" });
    }

    try {
        const tarea = await prisma.tarea.create({
            data: {
                name: req.body.name,
                descripcion: req.body.descripcion,
                userId: User.id,
            },
        });
        res.json({ message: "Tarea creada correctamente", data: tarea });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la tarea" });
    }
};

const getTableTareas = async (req: Request, res: Response) => {
    try {
        const tareas = await prisma.tarea.findMany();
        res.json({ data: tareas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};

const getTareasUsers = async (req: Request, res: Response) => {
    const {userId} = req.params;

    if (!userId) {
        return res.status(400).json({ error: "El ID del usuario es requerido" });
    }

    const User = await prisma.user.findUnique({
        where: { id: Number(userId) },
    });

    if (!User) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    try {
        const tareas = await prisma.tarea.findMany({
            where: { userId: User.id },
        });
        res.json({ data: tareas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
};

const getTareaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tarea = await prisma.tarea.findUnique({
            where: { id: Number(id) },
        });
        if (!tarea) {
            return res.status(404).json({ error: "Tarea no encontrada" });
        }
        res.json({ data: tarea });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener la tarea" });
    }
};

const updateTarea = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const tarea = await prisma.tarea.update({
            where: { id: Number(id) },
            data: {
                name: req.body.name,
                descripcion: req.body.descripcion,
                completada: req.body.completada,
            },
        });

        if (tarea.completada) {
            await prisma.tarea.delete({
                where: { id: tarea.id },
            });
            return res.json({ message: "Tarea completada y eliminada correctamente" });
        }

        res.json({ message: "Tarea actualizada correctamente", data: tarea });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
};

const deleteTarea = async (req: Request, res: Response) => {
    const { id } = req.params;  
    try {
        const tarea = await prisma.tarea.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Tarea eliminada correctamente", data: tarea });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
};

export { createtaks, getTableTareas, getTareasUsers, getTareaById, updateTarea, deleteTarea };